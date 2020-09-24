const prevBtn = document.getElementById('button-previous');
const nextBtn = document.getElementById('button-next');

prevBtn.addEventListener('click', moveToNextSlide);
nextBtn.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    console.log('next slide');
}

function moveToPrevSlide() {
    console.log('prev slide');
}