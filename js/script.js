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
        bannerH: 'Fortis: Creating Space for Success',
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
        aboutP: 'Fortis is your reliable partner across diverse sectors. We offer services in real estate, industrial equipment, furniture, automotive, and petroleum products. Our goal is to create a comfortable and successful space for you.',
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
        abouth1:'About Us.',
        abouth2:'Our Journey.',
        abouth3:'Our Mission.',
        abouth4:'Why Choose Us.',
        abouth5:'Get in Touch.',
        aboutp1:'Welcome to Fortis, your trusted partner in creating a world of possibilities. With a foundation built on integrity and innovation, we have established ourselves as a reliable and dynamic force in various industries. Our commitment to excellence drives us to deliver top-quality products and services that cater to your diverse needs.',
        aboutp2:'Since our inception, Fortis has embarked on a journey of growth and exploration. Starting with a vision to provide comprehensive solutions, we have evolved into a multifaceted company, offering a wide range of goods and services. Our relentless pursuit of knowledge and adaptability has enabled us to stay ahead of the curve and bring you cutting-edge solutions.',
        aboutp3:'At Fortis, our mission is to be a driving force for your success. We strive to create a harmonious environment where innovation flourishes, and possibilities become reality. Through our dedicated team and expertise, we aim to provide top-quality products, impeccable service, and strategic guidance that empower you to achieve your goals.',
        aboutp4:'Diverse Expertise: Our team comprises experts across various domains, ensuring comprehensive solutions for your every requirement. Quality Assurance: We uphold the highest standards of quality in every product and service we offer, fostering trust and reliability. Customer-Centric Approach: Your satisfaction is ou lng-r priority. We listen, understand, and tailor our offerings to match your unique needs. Global Reach: With a strong presence in international markets, we facilitate seamless import, export, and distribution of goods.',
        aboutp5:'Join hands with Fortis and experience a journey of innovation, growth, and success. Contact us today to explore how we can partner to achieve greatness together.',
        swipert1: 'Property market',
        swipert2: 'Equipment for industrial use',
        swipert3: 'Furnishings and decorative supplies',
        swipert4: 'Transport',
        swipert5: 'Petroleum derivatives',
        swipert6: 'Edibles and beverages',
        swipert7: 'Beauty products',
        swipert8: 'Clothes',
        swipert9: 'Healthcare equipment',
        swipert10: 'Electrical and electronic engineering',
        swipert11: 'Travel and souvenir items',
        swipert12:'Solar Panels',
        swiperp1: 'Buying, selling, leasing various categories of properties, alongside offering management and advisory solutions.',
        swiperp2: 'We provide a variety of industrial machinery, agricultural equipment, elevators, and their components. We also specialize in marketing, importing, and exporting these products.',
        swiperp3: 'We offer a diverse range of wooden and metal office and home furniture solutions, alongside a variety of household appliances and accessories.',
        swiperp4: 'We engage in the trading of motor vehicles and their components, offering import, export, and spare parts production services.',
        swiperp5: 'We are involved in the sales, import, export, warehousing, and distribution of a wide range of oil and petroleum products. Additionally, we operate filling stations.',
        swiperp6: 'We provide an extensive variety of food, beverages, dried fruits, and nuts. We specialize in the import and export of these products.',
        swiperp7: 'We offer a diverse selection of cosmetic items, skincare products, fragrances, and more.',
        swiperp8: 'We provide a range of clothing options, such as jeans, trousers, jackets, coats, skirts, and more. We are involved in fabric and accessory production and marketing.',
        swiperp9: 'We offer a range of medical equipment and replacement parts, which include laboratory materials and X-ray machinery.',
        swiperp10: 'We are involved in the trading, import, export, repair, and maintenance of diverse electrical and electronic devices.',
        swiperp11: 'We manufacture, purchase, and trade various types of tourist and souvenir products.',
        swiperp12:'We engage in the trading of solar panels.',
        feedbackH:'Reviews about us',
        contactH:'Contacts',
        contactBlockP:'Reception of calls: from 9:00 to 18:00 (Mon-Fri)',
        contactTitle:'Address',
        contactP:'Uzbekistan, Tashkent, Chilanzar district, street AFROSIAB, street BESH-YOGOCH',
    },

    tu: {
        link1: 'Ev',
        link2: 'Şirket hakkında',
        link3: 'Sunuyoruz',
        link4: 'Hakkımızda yapılan yorumlar',
        link5: 'Kişiler',
        bannerH: 'Fortis: Başarı İçin Alan Oluşturuyoruz',
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
        aboutP: 'Fortis, farklı sektörlerde güvenilir bir ortağınızdır. Gayrimenkul, endüstriyel ekipman, mobilya, otomotiv ve petrol ürünleri alanlarında hizmet sunuyoruz. Amacımız sizin için rahat ve başarılı bir alan yaratmaktır.',
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
        abouth1:'Hakkımızda.',
        abouth2:'Yolumuz.',
        abouth3:'Misyonumuz.',
        abouth4:'Bizi Tercih Etmeniz İçin Nedenler.',
        abouth5:'İletişime geçin.',
        aboutp1:'Fortis\'a hoş geldiniz, sizi bir dünya dolusu fırsat yaratma yolculuğunda güvenilir bir ortak olarak karşılıyoruz. İlkeli ve yenilikçilik temelinde kurulan yapımızla, çeşitli sektörlerde güvenilir ve dinamik bir güç haline geldik. Mükemmelliğe olan taahhüdümüz, sizin çeşitli ihtiyaçlarınıza uygun üst düzey ürünler ve hizmetler sunmamıza yol açar.',
        aboutp2:'Kuruluşumuzdan bu yana, Fortis büyüme ve keşif dolu bir yolculuğa çıktı. Kapsamlı çözümler sunma vizyonuyla başladık ve geniş bir mal ve hizmet yelpazesi sunan çok yönlü bir şirkete dönüştük. Bilgiye olan sürekli arayışımız ve adaptasyon yeteneğimiz, sizlere öncü çözümler sunmak için zamanın ötesine geçmemize yardımcı oldu.',
        aboutp3:'Fortis olarak, misyonumuz sizin başarınıza itici güç olmaktır. Yeniliklerin geliştiği ve fırsatların gerçeklik haline geldiği uyumlu bir ortam yaratmaya çalışıyoruz. Özverili ekibimiz ve uzmanlığımız sayesinde, size üst düzey ürünler, kusursuz hizmet ve hedeflerinize ulaşmanızı sağlayacak stratejik rehberlik sunmayı amaçlıyoruz.',
        aboutp4:'Çeşitli Uzmanlık Alanları: Ekibimiz, farklı alanlarda uzmanlardan oluşur, böylece her türlü ihtiyacınıza kapsamlı çözümler sunarız. Kalite Güvencesi: Sunulan her ürün ve hizmette en yüksek kalite standartlarını koruyarak, güven ve güvenilirlik oluşturuyoruz. Müşteri Odaklı Yaklaşım: Memnuniyetiniz önceliğimizdir. Dinler, anlarız ve benzersiz ihtiyaçlarınıza uygun çözümler sunarız. Küresel Erişim: Uluslararası pazardaki güçlü varlığımız ile malzemelerin sorunsuzca ithalat, ihracat ve dağıtımını sağlıyoruz.',
        aboutp5:'Birlikte Fortis\'a katılın ve yenilik, büyüme ve başarının bir yolculuğunu deneyimleyin. Bugün bize ulaşarak, birlikte büyüklüğü elde etmek için nasıl ortaklık kurabileceğimizi keşfedin.',
        swipert1: 'Gayrimenkul pazarı',
        swipert2: 'Endüstriyel kullanıma yönelik ekipmanlar',
        swipert3: 'Mobilyalar ve dekoratif malzemeler',
        swipert4: 'Ulaşım',
        swipert5: 'Petrol türevleri',
        swipert6: 'Yiyecek ve içecekler',
        swipert7: 'Güzellik ürünleri',
        swipert8: 'Giysiler',
        swipert9: 'Sağlık ekipmanları',
        swipert10: 'Elektrik ve elektronik mühendisliği',
        swipert11: 'Seyahat ve anı eşyaları',
        swipert12:'Güneş Panelleri',
        swiperp1: 'Çeşitli kategorilerde gayrimenkul alımı, satımı, kiralama işlemleri ve yanı sıra yönetim ve danışmanlık çözümleri sunmaktayız.',
        swiperp2: 'Geniş bir endüstriyel ve inşaat makineleri, tarım ekipmanları, asansörler ve parçaları yelpazesi sunuyoruz. Ayrıca, bu ürünlerin pazarlamasına, ithalatına ve ihracatına odaklanmaktayız.',
        swiperp3: 'Geniş bir yelpazede ahşap ve metal ofis ve ev mobilyası çözümleri sunuyoruz. Ayrıca çeşitli ev aletleri ve aksesuarları da bulunmaktadır.',
        swiperp4: 'Motorlu taşıtların ticareti ve bileşenleriyle ilgileniyoruz; ithalat, ihracat ve yedek parça üretim hizmetleri sunuyoruz.',
        swiperp5: 'Geniş bir yelpazede petrol ve petrolden elde edilen ürünlerin satışı, ithalatı, ihracatı, depolanması ve dağıtımı konusunda faaliyet gösteriyoruz. Ayrıca akaryakıt istasyonları işletiyoruz.',
        swiperp6: 'Geniş bir çeşitlilikte gıda, içecek, kuru meyve ve kuruyemiş sunuyoruz. Bu ürünlerin ithalatı ve ihracatına özellikle odaklanıyoruz.',
        swiperp7: 'Çeşitli kozmetik ürünler, cilt bakım ürünleri, parfümler ve daha fazlasını sunuyoruz.',
        swiperp8: 'Farklı giyim seçenekleri sunuyoruz, kot pantolon, pantolon, ceket, kaban, etek gibi ürünler dahil olmak üzere. Ayrıca kumaş ve aksesuar üretimi ve pazarlamasıyla ilgileniyoruz.',
        swiperp9: 'Laboratuvar malzemeleri ve röntgen makinelerini içeren bir dizi tıbbi ekipman ve yedek parça sunuyoruz.',
        swiperp10: 'Farklı elektrik ve elektronik cihazların ticareti, ithalatı, ihracatı, tamiri ve bakımı konusunda faaliyet gösteriyoruz.',
        swiperp11: 'Çeşitli türde turistik ve hediyelik ürünler üretiyor, satın alıyor ve ticaretini yapıyoruz.',
        swiperp12:'Güneş panellerinin ticareti ile ilgileniyoruz.',
        feedbackH:'Hakkımızda yapılan yorumlar',
        contactH:'Kişiler',
        contactBlockP:'Çağrıların alınması: 9:00 - 18:00 (Pazartesi-Cuma)',
        contactTitle:'Adres',
        contactP:'Özbekistan, Taşkent, Chilanzar bölgesi, AFROSIAB caddesi, BESH-YOGOCH caddesi',
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