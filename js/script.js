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
        achivmentsH1:'Years of experience',
        achivmentsH2:'Branches throughout Uzbekistan',
        achivmentsH3:'Completed projects',
        formH:'APPLICATION ON-LINE',
        formP:'Leave a request and our specialists will contact you as soon as possible',
        formBtn:'Send',
        title1:'OUR SERVICES:',
        subtitle1:'WE ARE OFFERING TO YOU',
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
        service12:'Solar Panels',
        serviceBtn:'More details',
        aboutTitle:'EXPERTIZE',
        aboutSubtitle:'WE WORK FOR THE GOOD OF THE PEOPLE',
        aboutP:'At HEATERPOL, expertise is our cornerstone. With years of experience and a deep understanding of various industries, we bring a wealth of knowledge to every project. Our team consists of dedicated professionals who excel in their respective fields, ensuring that our clients receive the highest level of service and guidance. Whether it\'s real estate, industrial equipment, automotive trade, or any other domain, our expertise allows us to navigate complex challenges and deliver tailored solutions. We stay ahead of the curve by staying updated with the latest trends and technologies, enabling us to provide innovative and efficient outcomes.',
        aboutLink:'READ MORE',
        aboutBlockH1:'FLEXIBLE PRICES',
        aboutBlockH2:'EXPERIENCE',
        aboutBlockH3:'QUALITY',
        aboutBlockP1:'We give gifts and discounts to our customers!',
        aboutBlockP2:'The company employs only experienced specialists',
        aboutBlockP3:'We guarantee the quality of our services and products',
    },

    tu: {
        link1: 'Ev',
        link2: 'Şirket hakkında',
        link3: 'sunuyoruz',
        link4: 'Hakkımızda yapılan yorumlar',
        link5: 'Kişiler',
        bannerH: 'HEATERPOL: Başarı İçin Alan Oluşturuyoruz',
        callBtn: 'Geri arama',
        achivmentsH1:'Yılların Deneyimi',
        achivmentsH2:'Özbekistan genelinde şubeler',
        achivmentsH3:'Tamamlanmış projeler',
        formH:'ONLINE BAŞVURU',
        formP:'Bir talep bırakın, uzmanlarımız sizinle en kısa sürede iletişime geçecektir.',
        formBtn:'Göndermek',
        title1:'HİZMETLERİMİZ',
        subtitle1:'SİZE SUNUYORUZ',
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
        service12:'Güneş Panelleri',
        serviceBtn:'Daha fazla detay',
        aboutTitle:'Uzmanlık',
        aboutSubtitle:'İNSANIN İYİLİĞİ İÇİN ÇALIŞIYORUZ',
        aboutP:'HEATERPOL\'da, uzmanlık temel ilkesimizdir. Yılların deneyimi ve çeşitli sektörlerin derin anlayışıyla her projeye geniş bir bilgi birikimi getiriyoruz. Ekibimiz, kendi alanlarında üstün performans gösteren özverili profesyonellerden oluşur, bu da müşterilerimizin en yüksek düzeyde hizmet ve rehberlik aldığı anlamına gelir. Gayrimenkul, endüstriyel ekipman, otomotiv ticareti veya diğer herhangi bir alan olsun, uzmanlığımız karmaşık zorlukları aşmamıza ve özelleştirilmiş çözümler sunmamıza olanak tanır. En son trendler ve teknolojiler ile güncel kalarak, yenilikçi ve etkili sonuçlar sağlama yeteneğine sahibiz.',
        aboutLink:'DEVAMINI OKU',
        aboutBlockH1:'ESNEK FİYATLAR',
        aboutBlockH2:'DENEYİM',
        aboutBlockH3:'KALİTE',
        aboutBlockP1:'Müşterilerimize hediyeler ve indirimler veriyoruz!',
        aboutBlockP2:'Şirket yalnızca deneyimli uzmanları istihdam etmektedir',
        aboutBlockP3:'Hizmet ve ürünlerimizin kalitesini garanti ediyoruz',
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