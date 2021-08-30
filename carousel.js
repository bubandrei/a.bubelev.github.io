const carousel = document.getElementById('carousel');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const imageIndexesContainer = document.getElementById('imageIndexesContainer');
const width = 25;
let currentIndex = 0;
const lastIndex = -4;
previous.setAttribute('disabled', 'disabled');

function scrollToNext() {
    previous.removeAttribute('disabled');
    currentIndex--;
    scrollCarousel();
}


function scrollToPrevious() {
    next.removeAttribute('disabled');
    currentIndex++;
    scrollCarousel();
}

function scrollCarousel() {
    carousel.style.transform = `translateX(${currentIndex * width}%)`
    if (currentIndex === lastIndex) {
        next.setAttribute('disabled', 'disabled');
    }
    if (currentIndex === 0) {
        previous.setAttribute('disabled', 'disabled');
    }
}