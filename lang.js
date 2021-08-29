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
    featured: "Our Featured",
    check:"Here you can check out our new products BOSS",
    dresses:"Dresses & Jumpsuits",
    clock:"Best Watches",
    run:"Running Shoes",
    mid:"MID SEASON'S SALE",
    summer:"Summer Collection",
    up:"UP TO 80% OFF",
    buy:"Buy now",
    plan:"It is our vision to become the leading premium tech-driven fashion platform worldwide and in this context, we will revolutionize the way in which we interact with consumers. Our ambition is to double our business to EUR 4 billion in revenues by 2025 and to become one of the top-100 global brands.",
    men:"MEN",
    women:"WOMEN",
    boys:"BOYS",
    girls:"GIRLS",
    shoes:"SHOES",
    sale:"SALE",
    previous:"Previous",
    next:"Next",
}
const ru = {
    
    home: "Главная",
    shop: "Товары",
    blog: "Блог",
    about: "Распродажа",
    contact: "Контакты",
    new: "НОВЫЕ КОЛЛЕКЦИИ",
    price: "Porsche x BOSS",
    offers: "Отвественный подход HUGO к моде",
    now: "Посмореть сейчас",
    sneakers:"Экологичные модели",
    outfit:"По вашим правилам",
    sportwear:"Современный стиль",
    featured: "Рекомендации",
    check:"Здесь вы можете познакомиться с нашими новинками BOSS",
    dresses:"Платья и комбинезоны",
    clock:"Часы",
    run:"Обувь для спорта",
    mid:"РАСПРОДАЖА СЕЗОНА",
    summer:"Летняя коллекция",
    up:"СКИДКА ДО 80%",
    buy:"Купить",
    plan:"Наше видение - стать ведущей технологической модной платформой премиум-класса во всем мире, и в этом контексте мы произведем революцию в способах взаимодействия с потребителями. Наша цель - удвоить наш бизнес до 4 миллиардов евро к 2025 году и войти в число 100 лучших мировых брендов.",
    men:"МУЖЧИНЫ",
    women:"ЖЕНЩИНЫ",
    boys:"МАЛЬЧИКИ",
    girls:"ДЕВОЧКИ",
    shoes:"ОБУВЬ",
    sale:"РАСПРОДАЖА",
    previous:"Предыдущая",
    next:"Следующая",

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