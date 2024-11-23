const productSlider = document.getElementById("product-slider");
const sliderArrowLeft = document.getElementById("slider-arrow-left");
const sliderArrowRight = document.getElementById("slider-arrow-right");

let productSliderXPosition = 0;
let maxScrollPosition = productSlider.scrollWidth - productSlider.clientWidth;

productSlider.addEventListener('scroll', () => {
    productSliderXPosition = productSlider.scrollLeft;
    maxScrollPosition = productSlider.scrollWidth - productSlider.clientWidth;
});

sliderArrowLeft.addEventListener("click", () => arrowHandlers("LEFT"));
sliderArrowRight.addEventListener("click", () => arrowHandlers("RIGHT"));

function arrowHandlers(type) {
    switch(type) {
        case "LEFT": {
            if (productSliderXPosition > 100) {
                productSlider.scrollLeft = productSliderXPosition - 333;
            } else {
                productSlider.scrollLeft = 0; // Ensure it doesn't scroll beyond the leftmost edge
            }
            break;
        }
        case "RIGHT": {
            if (productSliderXPosition < maxScrollPosition) {
                productSlider.scrollLeft = productSliderXPosition + 333;
            } else {
                productSlider.scrollLeft = maxScrollPosition; // Ensure it doesn't scroll beyond the rightmost edge
            }
            break;
        }
        default: {
            throw new Error('Invalid function arrowHandlers type...');
        }
    }
}
