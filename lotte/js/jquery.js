$(document).ready( function(){
    $(".sub").hide();

    $('.menu_s').hover( function(){
        $('.sub',this).slideToggle();
    });



    var swiper = new Swiper('.swiper-container',{
        autoplay : {
            delay:3000,
            disableOnInteraction: true
        },
        slidesPerView :1,
        loop: true,
        pagination : {
            el:'.swiper-pagination',
            clickable:true,
        },
        navigation : {
            nextEl:'#next',
            prevEl:'#prev',
        }
    });
})