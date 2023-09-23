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
        callBtn:'Back call',
    },

    tu: {
        link1: 'Ev',
        link2: 'Şirket hakkında',
        link3: 'sunuyoruz',
        link4: 'Hakkımızda yapılan yorumlar',
        link5: 'Kişiler',
        bannerH: 'HEATERPOL: Başarı İçin Alan Oluşturuyoruz',
        callBtn:'Geri arama',
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
}
let lang = window.hasOwnProperty('localStorage') || 'en';
setLang(lang);