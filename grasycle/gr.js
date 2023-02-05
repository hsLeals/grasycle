window.addEventListener("scroll", function() {
    if (window.scrollY>=10) {
        document.querySelector(".menu").style.backgroundColor="gray";
    }else{
        document.querySelector(".menu").style.backgroundColor="transparent"
    }
})