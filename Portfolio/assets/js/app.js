const burger= document.querySelector('.burger')
const mobileMenu=document.querySelector('.mobile_menu')


burger.addEventListener('click',()=>{
    burger.classList.toggle('toggle')
    mobileMenu.classList.toggle('mobile_menu_show')
});




//$(document).ready(function(){
//    $('.burger').click(function(){
//        $('mobile_menu').toggleclass('mobile_menu_show');
//    });
//});