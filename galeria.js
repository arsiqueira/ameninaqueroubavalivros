// Seleção do slider para dispositivos móveis
const mobileSlider = document.querySelector('#mobile-slider');
const slides = mobileSlider.querySelectorAll('.slider-item');
let currentIndex = 0;
let isDragging = false;
let startX = 0, currentX = 0, prevX = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    const totalSlides = slides.length;
    if (index < 0) index = totalSlides - 1; // Vai para o último slide
    if (index >= totalSlides) index = 0; // Vai para o primeiro slide

    currentIndex = index;
    mobileSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Funções para detectar o toque e o movimento de arrasto
mobileSlider.addEventListener('touchstart', function(event) {
    isDragging = true;
    startX = event.touches[0].clientX; // Posição inicial do toque
});

mobileSlider.addEventListener('touchmove', function(event) {
    if (isDragging) {
        currentX = event.touches[0].clientX; // Posição atual do toque
        const diffX = currentX - startX; // Calcula a diferença
        mobileSlider.style.transform = `translateX(${prevX + diffX}px)`; // Move o slider
    }
});

mobileSlider.addEventListener('touchend', function() {
    if (isDragging) {
        const diffX = currentX - startX;
        if (diffX < -50) {
            showSlide(currentIndex + 1); // Próximo slide se deslizar para a esquerda
        } else if (diffX > 50) {
            showSlide(currentIndex - 1); // Slide anterior se deslizar para a direita
        } else {
            showSlide(currentIndex); // Mantém o slide atual
        }
        isDragging = false;
        prevX = -currentIndex * mobileSlider.clientWidth; // Reseta a posição para o slide atual
    }
});
