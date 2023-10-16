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

// burger menu
const burger = document.querySelector('#burger'),
    header = document.querySelector('.nav'),
    overlay = document.querySelector('.header_overlay')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

overlay.addEventListener('click', function () {
    header.classList.toggle('open')
})

// language words
const langArr = {
    en: {
        link1: 'Home',
        link2: 'About company',
        link3: 'We offer',
        link4: 'Reviews about us',
        link5: 'Contacts',
        bannerH: 'HEATERPOL: Creating Space for Success',
        callBtn: 'Back call',
        achivmentsH1: 'Years of experience',
        achivmentsH2: 'Branches throughout Uzbekistan',
        achivmentsH3: 'Completed projects',
        formH: 'APPLICATION ON-LINE',
        formP: 'Leave a request and our specialists will contact you as soon as possible',
        formBtn: 'Send',
        title1: 'OUR SERVICES:',
        subtitle1: 'WE ARE OFFERING TO YOU',
        service1: 'Property market',
        service2: 'Machinery for industrial purposes',
        service3: 'Furnishings and decorative supplies',
        service4: 'Transport',
        service5: 'Petroleum derivatives',
        service6: 'Edibles and beverages',
        service7: 'Beauty products',
        service8: 'Clothes',
        service9: 'Healthcare equipment',
        service10: 'Electrical and electronic engineering',
        service11: 'Travel and souvenir items',
        service12: 'Solar Panels',
        serviceBtn: 'More details',
        aboutTitle: 'About Us',
        aboutSubtitle: 'WE WORK FOR THE GOOD OF THE PEOPLE',
        aboutP: 'HEATERPOL is your reliable partner across diverse sectors. We offer services in real estate, industrial equipment, furniture, automotive, and petroleum products. Our goal is to create a comfortable and successful space for you.',
        aboutLink: 'READ MORE',
        aboutBlockH1: 'FLEXIBLE PRICES',
        aboutBlockH2: 'EXPERIENCE',
        aboutBlockH3: 'QUALITY',
        aboutBlockP1: 'We give gifts and discounts to our customers!',
        aboutBlockP2: 'The company employs only experienced specialists',
        aboutBlockP3: 'We guarantee the quality of our services and products',
        offer: 'WE OFFER',
        workH: 'HOW WE ARE WORKING',
        workSubH: 'ONLY 4 STEPS FOR SUCCESSFUL COOPERATION',
        work1: 'YOU LEAVE A REQUEST ON THE SITE',
        work2: 'WE MAKE CALCULATIONS',
        work3: 'WE DO THE WORK',
        work4: 'YOU PAY FOR OUR WORK',
        workBtn: 'order a consultation',
        workP: 'WRITE TO US AND OUR SPECIALISTS WILL CONTACT YOU SOON',
        contactTitle: 'CONTACT',
        contactSubTitle: 'CONTACT US',
        contactH: 'APPLICATION ON-LINE',
        contactP: 'Leave a request and our specialists will contact you as soon as possible',
        contactBtn: 'SEND',
        footerP1: 'Call the number:',
        footerP2: 'Write for any questions:',
        footerLink1: 'Home',
        footerLink2: 'About company',
        footerLink3: 'We offer',
        footerLink4: 'Reviews about us',
        footerLink5: 'Contacts',
        emptyInput: 'Please fill in all the required fields',
        emptyInputBtn: 'Close',
        successMessageG:'Success!',
        successMessageW:'your message was sent.',
        successMessageBtn: 'Close',
        error1:'Error!',
        error2:'Please try to send one more time or you can send your message from',
        error3:'or',
        errorBtn: 'Close',
    },

    tu: {
        link1: 'Ev',
        link2: 'Şirket hakkında',
        link3: 'Sunuyoruz',
        link4: 'Hakkımızda yapılan yorumlar',
        link5: 'Kişiler',
        bannerH: 'HEATERPOL: Başarı İçin Alan Oluşturuyoruz',
        callBtn: 'Geri arama',
        achivmentsH1: 'Yılların Deneyimi',
        achivmentsH2: 'Özbekistan genelinde şubeler',
        achivmentsH3: 'Tamamlanmış projeler',
        formH: 'ONLINE BAŞVURU',
        formP: 'Bir talep bırakın, uzmanlarımız sizinle en kısa sürede iletişime geçecektir.',
        formBtn: 'Göndermek',
        title1: 'HİZMETLERİMİZ',
        subtitle1: 'SİZE SUNUYORUZ',
        service1: 'Gayrimenkul pazarı',
        service2: 'Endüstriyel amaçlar için makine ekipmanları',
        service3: 'Mobilyalar ve dekoratif malzemeler',
        service4: 'Ulaşım',
        service5: 'Petrol türevleri',
        service6: 'Yiyecek ve içecekler',
        service7: 'Güzellik ürünleri',
        service8: 'Giysiler',
        service9: 'Sağlık ekipmanları',
        service10: 'Elektrik ve elektronik mühendisliği',
        service11: 'Seyahat ve anı eşyaları',
        service12: 'Güneş Panelleri',
        serviceBtn: 'Daha fazla detay',
        aboutTitle: 'Hakkımızda',
        aboutSubtitle: 'İNSANIN İYİLİĞİ İÇİN ÇALIŞIYORUZ',
        aboutP: 'HEATERPOL, farklı sektörlerde güvenilir bir ortağınızdır. Gayrimenkul, endüstriyel ekipman, mobilya, otomotiv ve petrol ürünleri alanlarında hizmet sunuyoruz. Amacımız sizin için rahat ve başarılı bir alan yaratmaktır.',
        aboutLink: 'DEVAMINI OKU',
        aboutBlockH1: 'ESNEK FİYATLAR',
        aboutBlockH2: 'DENEYİM',
        aboutBlockH3: 'KALİTE',
        aboutBlockP1: 'Müşterilerimize hediyeler ve indirimler veriyoruz!',
        aboutBlockP2: 'Şirket yalnızca deneyimli uzmanları istihdam etmektedir',
        aboutBlockP3: 'Hizmet ve ürünlerimizin kalitesini garanti ediyoruz',
        offer: 'SUNUYORUZ',
        workH: 'NASIL ÇALIŞIYORUZ',
        workSubH: 'ONLY 4 STEPS FOR SUCCESSFUL COOPERATION',
        work1: 'BAŞARILI İŞBİRLİĞİ İÇİN SADECE 4 ADIM',
        work2: 'HESAPLAMA YAPIYORUZ',
        work3: 'BİZ İŞİ YAPIYORUZ',
        work4: 'İŞİMİZİN KARŞILIĞINI ÖDÜYORSUNUZ',
        workBtn: 'danışma siparişi vermek',
        workP: 'BİZE YAZIN, UZMANLARIMIZ SİZİNLE EN KISA ZAMANDA İLETİŞİME GEÇSİN',
        contactTitle: 'TEMAS ETMEK',
        contactSubTitle: 'BİZE ULAŞIN',
        contactH: 'ONLINE BAŞVURU',
        contactP: 'Bir talep bırakın, uzmanlarımız sizinle en kısa sürede iletişime geçecektir.',
        contactBtn: 'GÖNDERMEK',
        footerP1: 'Numarayı ara:',
        footerP2: 'Sorularınız için yazın:',
        footerLink1: 'Ev',
        footerLink2: 'Şirket hakkında',
        footerLink3: 'Sunuyoruz',
        footerLink4: 'Hakkımızda yapılan yorumlar',
        footerLink5: 'Kişiler',
        emptyInput: 'Lütfen gerekli tüm alanları doldurun',
        emptyInputBtn: 'Kapatmak',
        successMessageG:'Başarı!',
        successMessageW:'mesajınız gönderildi.',
        successMessageBtn: 'Kapatmak',
        error1:'Hata!',
        error2:'Lütfen bir kez daha göndermeyi deneyin veya mesajınızı gönderebilirsiniz:',
        error3:'veya',
        errorBtn: 'Kapatmak',
    },
};

//language
const langEn = document.querySelector('#lang-en');
const langTu = document.querySelector('#lang-tu');

langEn.addEventListener('click', setLang.bind(null, 'en'));
langTu.addEventListener('click', setLang.bind(null, 'tu'));

function setLang(lang) {
    if (!langArr.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty('localStorage'))
        window.localStorage.setItem('lang', lang);
    for (let key in langArr[lang]) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[lang][key];
        }
    }
    let serviceBtns = document.querySelectorAll('.lng-serviceBtn');
    for (let btn of serviceBtns) {
        btn.innerHTML = langArr[lang]['serviceBtn'];
    }
}
let lang = window.hasOwnProperty('localStorage') || 'en';
setLang(lang);

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

// form
const backCall = document.querySelector('.backCall'),
    backCallClose = document.querySelector('.backCall-close'),
    backCallOpen = document.querySelector('.header__btn');

backCallOpen.addEventListener('click', function () {
    backCall.style.display = 'flex'
})

backCallClose.addEventListener('click', function () {
    backCall.style.display = 'none'
})

let errorBtn = document.querySelector('.error__mesage-btn');
errorBtn.addEventListener('click', function () {
    let errorMessage = document.querySelector('.error__mesage')
    errorMessage.style.display = "none"
})

let inputBtn = document.querySelector('.empty__input-btn');
inputBtn.addEventListener('click', function () {
    let emptyInput = document.querySelector('.empty__input')
    emptyInput.style.display = "none"
})

let successBtn = document.querySelector('.success__message-btn');
successBtn.addEventListener('click', function () {
    let successMessage = document.querySelector('.success__message')
    successMessage.style.display = "none"
})

// backCall
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    // Show the animation container
    const animationContainer = document.querySelector(".load")

    // Get the form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    // Send the data to EmailJS
    if (formData.name && formData.email && formData.phone) {
        emailjs.send("service_uchmgph", "template_mjlpy9g", formData).then(
            function () {
                let successMessage = document.querySelector('.success__message')
                successMessage.style.display = "flex"

                animationContainer.style.display = "none";
                document.getElementById("name").value = '';
                document.getElementById("email").value = '';
                document.getElementById("phone").value = '';
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