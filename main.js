function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const content = {
    about: {
        en: `My name is Daniel Uzunov, and I’m a passionate freeride skier from Bulgaria. I learned to ski at a very young age in the Bulgarian mountains, where I developed a deep love for the sport. At 13, I began studying at the High School of Tourism in Bad Hofgastein, Austria. The experience was challenging, but skiing on weekends brought me pure joy.

By my final year in Austria, I recognized that skiing was a central part of my life, and I made the most of that year on the slopes. After graduating in May 2020, I returned to my roots in Bansko, where skiing became a daily mission. Riding alongside some of the best freeriders in Bulgaria boosted my confidence and pushed my skills to new heights. I even had the opportunity to be one of the main riders in the Bulgarian ski movie "Winter."`,

        bg: `Казвам се Даниел Узунов и съм запален фрирайд скиор от България. На много ранна възраст се научих да карам ски в българските планини, където развих дълбока любов към този спорт. На 13 години започнах да уча в Средното училище по туризъм в Бад Хофгастайн, Австрия. За мен беше предизвикателство, но карането на ски през уикендите ми носеше истинска радост.

През последната си година в Австрия осъзнах, че ските са основна част от живота ми, и направих всичко възможно да прекарам колкото се може повече време в планината. След завършването си през май 2020 година се върнах към корените си в Банско, където карането на ски стана моя ежедневна мисия. Карането с най-добрите фрирайдъри в България ми вдъхна увереност и повиши нивото ми. Имах възможността да бъда един от скиорите в българския ски филм "Зима".
`
    },
    aboutText2: {
        en: `Competing internationally has always been a dream of mine. I was set to debut in the Freeride World Tour Qualifiers in March 2020, but the pandemic changed those plans. After a couple of challenging seasons marked by injuries, I managed to place in the top 10. Last season, however, my body and mind were in the right place. Thanks to hard training and sessions with a sports psychologist, I progressed significantly. While I didn’t quite stomp a podium run, I realized that I’m on the right path to achieving my goals in competitive skiing.
`,

        bg: `Винаги е било мечта за мен да се състезавам на международната сцена. Планирах дебюта си в квалификациите за Freeride World Tour през март 2020, но пандемията промени плановете ми. След няколко предизвикателни сезона, белязани от контузии, успях да заема място в топ 10. Миналият сезон обаче беше различен—умът и тялото ми бяха в правилното състояние. Благодарение на упоритите тренировки и сесиите с психолог за спорт, постигнах значителен напредък. Макар че не успях да спечеля подиум, осъзнах, че съм на прав път към реализиране на целите си в състезателния фрийрайд.`
    },
    futurePlans: {
        en: `The goal for the upcoming season is to collect enough points from the lower-ranked qualifiers to participate in the 4-star events and even in the challengers. To achieve this, I need to compete in at least 5 events across the Alps and ensure good preparation between competitions. Additionally, while not competing, I have several video projects lined up both in and outside of Bulgaria, and producing social media content is essential. I need your support to help put Bulgaria on the international freeride map!`,

        bg: `Целта за предстоящия сезон е да събера достатъчно точки от по-нискоквалифицираните състезания, за да мога да участвам в 4-звездни и дори в Challengers. За да постигна това, трябва да участвам в поне 5 състезания в Алпите и да се подготвя добре между стартовете. Освен това, докато не се състезавам, имам няколко видеопроекта, планирани както в България, така и извън нея, и непрекъснато отразяване на целия процес  социалните медии. Нуждая се от вашата подкрепа, за да помогна на България да заеме място на международната фрирайд сцена!`
    },
    latest: {
        en: `<i>Explore the thrill and beauty of my recent skiing escapades through these captivating snapshots. Whether gracefully navigating pristine powder or conquering challenging slopes, each image tells a story of passion, perseverance, and the sheer joy of freeride skiing. Take a visual journey with me through the world of snow-covered peaks and adrenaline-pumping descents.</i>`,

        bg: `<i>Разгледайте снимките от последните ми ски приключения и състезание.<br>
             Всяка снимка разказва за страстта, упоритостта и чистата радост от свободното каране на ски.</i>`
    },
    clickPicture: {
        en: `<i>Click on the image to make them bigger</i>`,

        bg: `<i>Кликнете върху изображенията, за да ги увеличите</i>`
    }
}

document.getElementById('aboutText').innerHTML = content.about.en;
document.getElementById('aboutText2').innerText = content.aboutText2.en;
document.getElementById('futurePlans').innerText = content.futurePlans.en;
document.getElementById('latest').innerHTML = content.latest.en;
document.getElementById('clickPicture').innerHTML = content.clickPicture.en;

let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bg' : 'en';
    document.getElementById('aboutText').innerHTML = content.about[currentLanguage];
    document.getElementById('aboutText2').innerText = content.aboutText2[currentLanguage];
    document.getElementById('futurePlans').innerText = content.futurePlans[currentLanguage];
    document.getElementById('latest').innerHTML = content.latest[currentLanguage];
    document.getElementById('clickPicture').innerHTML = content.clickPicture[currentLanguage];
}