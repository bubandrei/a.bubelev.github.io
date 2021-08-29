const en = {
   
    home: "Home",
    shop: "Shop",
    blog: "Blog",
    about: "Sale",
    contact: "Contact Us",
    new: "OVER 200 NEW ARRAIVALS",
    price: "Porsche x BOSS",
    offers: "Our more beautifull styles",
    now: "Shop now",
    sneakers:"Extreme Rare Sneakers",
    outfit:"Awesome Blank Outfit",
    sportwear:"Sportwear",

    




}
const ru = {
    
    home: "Главная",
    shop: "Товары",
    blog: "Блог",
    about: "Распродажа",
    contact: "Котакты",
    new: "Новые коллекции",
    price: "Porsche x BOSS",
    offers: "Отвественный подход HUGO к моде",
    now: "Посмореть сейчас",
    sneakers:"Экологичные модели",
    outfit:"По вашим правилам",
    sportwear:"Современный стиль",

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