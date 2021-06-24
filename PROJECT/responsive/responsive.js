burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.navbar-right');
navlist=document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('n-visibility');
    navbar.classList.toggle('nav-ht');
    navlist.classList.toggle('n-visibility');
})

document.getElementById("button").addEventListener("click",()=>{
    document.querySelector(".popup").style.display="flex";
})

    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".popup").style.display="none";
    })
