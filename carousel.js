const prevBtn = document.getElementById('button-previous');
const nextBtn = document.getElementById('button-next');

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

const carousel = document.getElementsByClassName('carousel-item');

function moveToNextSlide() {
    /*for(let i = 0; i < carousel.length; i++){
        carousel
    }*/
    console.log('next');
}

function moveToPrevSlide() {
    console.log('prev slide');
}

// turn off the visible class on all and then turn on.. 