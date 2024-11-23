'use strict'


const goToTopButton = document.getElementById("go-to-top");
// check the scroll position for showing the button
window.addEventListener('scroll' , () => {
    if(window.scrollY >= 200){
        goToTopButton.classList.remove("translate-y-[200%]")
    }else{
        goToTopButton.classList.add("translate-y-[200%]")
    }
})
// logic when button clicked
goToTopButton.addEventListener('click' , () => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
})