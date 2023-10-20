// THIS FILE IS FOR INDEX.HTML

// banner image change
let currentImg = 0
const images = ['./img/banner-bg.jpg', './img/banner-bg2.jpg', './img/banner-bg3.jpg'];

function changeImg() {
    document.getElementById('banner').style.backgroundImage = `url(${images[currentImg]})`;
    currentImg = (currentImg + 1) % images.length;
}

function changeImag() {
    currentImg = (currentImg - 1 + images.length) % images.length;
    document.getElementById('banner').style.backgroundImage = `url(${images[currentImg]})`;
}

setInterval(changeImg, 5000);

changeImg();

const bannerLeft = document.querySelector('#bannerBtn-l'),
    bannerRight = document.querySelector('#bannerBtn-r');

bannerLeft.addEventListener('click', changeImag);
bannerRight.addEventListener('click', changeImg);

// counter animation
const counters = document.querySelectorAll('.counter');
const counterM = document.querySelector('.counterM');

const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            if (counter.classList.contains('counterM')) {
                updateCounterM();
            } else {
                updateCounter(counter);
            }
            observer.unobserve(counter);
        }
    });
}, options);

counters.forEach(counter => {
    observer.observe(counter);
});

const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 200;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => updateCounter(counter), 50);
    } else {
        counter.innerText = target;
    }
};

const targetM = parseInt(counterM.getAttribute('data-target'));
const duration = 5000;
const step = Math.floor(targetM / (duration / 100));
let current = 0;

const updateCounterM = () => {
    current += step;
    if (current >= targetM) {
        counterM.textContent = targetM;
    } else {
        counterM.textContent = current;
        requestAnimationFrame(updateCounterM);
    }
};

// achivments form
document.getElementById("submitA").addEventListener("click", function (event) {
    event.preventDefault();

    // Show the animation container
    const animationContainer = document.querySelector(".load")

    // Get the form data
    const formData = {
        name: document.getElementById("inputname").value,
        email: document.getElementById("inputemail").value,
        phone: document.getElementById("inputhumber").value,
    };

    // Send the data to EmailJS
    if (formData.name && formData.email && formData.phone) {
        emailjs.send("service_uchmgph", "template_mjlpy9g", formData).then(
            function () {
                let successMessage = document.querySelector('.success__message')
                successMessage.style.display = "flex"

                animationContainer.style.display = "none";
                document.getElementById("inputname").value = '';
                document.getElementById("inputemail").value = '';
                document.getElementById("inputhumber").value = '';
            },
            function (error) {
                console.error("Email delivery failed:", error);
                let errorMessage = document.querySelector('.error__mesage')
                errorMessage.style.display = "flex"
                animationContainer.style.display = "none";
            }
        );
        animationContainer.style.display = "flex";
    } else {
        let emptyInput = document.querySelector('.empty__input')
        emptyInput.style.display = "flex"
        animationContainer.style.display = "none";
    }
});

// main form
document.getElementById("submitF").addEventListener("click", function (event) {
    event.preventDefault();

    // Show the animation container
    const animationContainer = document.querySelector(".load")

    // Get the form data
    const formData = {
        name: document.getElementById("nameF").value,
        email: document.getElementById("emailF").value,
        phone: document.getElementById("phoneF").value,
    };

    // Send the data to EmailJS
    if (formData.name && formData.email && formData.phone) {
        emailjs.send("service_uchmgph", "template_mjlpy9g", formData).then(
            function () {
                let successMessage = document.querySelector('.success__message')
                successMessage.style.display = "flex"

                animationContainer.style.display = "none";
                document.getElementById("nameF").value = '';
                document.getElementById("emailF").value = '';
                document.getElementById("phoneF").value = '';
            },
            function (error) {
                console.error("Email delivery failed:", error);
                let errorMessage = document.querySelector('.error__mesage')
                errorMessage.style.display = "flex"
                animationContainer.style.display = "none";
            }
        );
        animationContainer.style.display = "flex";
    } else {
        let emptyInput = document.querySelector('.empty__input')
        emptyInput.style.display = "flex"
        animationContainer.style.display = "none";
    }
});