const en = {
   
    home: "Home",
    shop: "Shop",
    blog: "Blog",
    about: "About",
    contact: "Contact Us"

}
const ru = {
    
    home: "Главная",
    shop: "Товары",
    blog: "Блог",
    about: "О компании",
    contact: "Котакты",
    new: ""
}
let currentLanguage = ru;

const currentLang = localStorage.getItem('lang') || 'ru';
if (currentLang === 'ru') {
    currentLanguage = ru;
} else {
    currentLanguage = en;
}


function translateAll() {
    const elements = document.querySelectorAll('[my-lang]')
    Array.from(elements).forEach(element => {
        const key = element.getAttribute('my-lang');
        element.textContent = currentLanguage[key];
    })
}

translateAll();

function translate2(lang) {
    if (lang === 'ru') {
        currentLanguage = ru;
    } else {
        currentLanguage = en;
    }
    localStorage.setItem('lang', lang);
    translateAll();
}