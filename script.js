// Its for preloader
let loader=document.querySelector("#preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})
let hamBtn=document.getElementById("hamburger-btn");
let navList=document.querySelector(".navbar");
hamBtn.addEventListener("click",()=>{
    if(navList.style.display=="flex"){
        navList.style.display="none";
    }
    else{
        navList.style.display="flex";
    }
})