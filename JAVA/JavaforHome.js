document.getElementById("contact-button2").addEventListener("click", function(){
    document.querySelector(".popup-contact").style.display = "flex"
})

document.getElementById("cross-sign4").addEventListener("click", function(){
    document.querySelector(".popup-contact").style.display = "none"
})
document.getElementById("contact-button2").addEventListener("click", function(){
    document.querySelector("body").style.overflow = "hidden"
})
document.getElementById("cross-sign4").addEventListener("click", function(){
    document.querySelector("body").style.overflow = "auto"
})
document.getElementById("cross-sign4").addEventListener("click", function(){
    document.querySelector(".container").style.filter = "none"
})
document.getElementById("contact-button2").addEventListener("click", function(){
    document.querySelector(".container").style.filter = "blur(10px)";
   
})

let preloader = document.getElementById('loading');
function myFunction() {
    preloader.style.display = 'none';
}
AOS.init();