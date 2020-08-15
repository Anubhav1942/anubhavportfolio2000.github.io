
  document.getElementById("contact-button").addEventListener("click", function(){
    document.querySelector(".popup-contact").style.display = "flex"
})

document.getElementById("cross-sign2").addEventListener("click", function(){
    document.querySelector(".popup-contact").style.display = "none"
})
document.getElementById("cross-sign2").addEventListener("click", function(){
    document.querySelector(".everything").style.filter = "none"
})
document.getElementById("contact-button").addEventListener("click", function(){
    document.querySelector(".everything").style.filter = "blur(10px)"
})




document.getElementById("contact-button").addEventListener("click", function(){
    document.querySelector("body").style.overflow = "hidden"
})
document.getElementById("cross-sign2").addEventListener("click", function(){
    document.querySelector("body").style.overflow = "auto"
})




document.getElementById("contact-me").addEventListener("click", function(){
    document.querySelector(".popup-contact").style.display = "flex"
})

document.getElementById("contact-me").addEventListener("click", function(){
    document.querySelector("body").style.overflow = "hidden"
})

document.getElementById("contact-me").addEventListener("click", function(){
    document.querySelector(".everything").style.filter = "blur(5px)"
})






let preloader = document.getElementById('loading');
function myFunction() {
    preloader.style.display = 'none';
}

AOS.init();
