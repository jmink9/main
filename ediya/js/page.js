$(document).ready(function(){
    $(".sub").hide();   

    $('.menu_s').hover( function(){
        $('.sub',this).slideToggle();
    });


    var swiper = new Swiper('.swiper-container',{
            autoplay : {
                delay:2000,
                disableOnInteraction: true
            },
            slidesPerView :1,
            loop: true,
            pagination : {
                el:'.swiper-pagination',
                clickable:true,
            },
        });
});

$(document).ready(function(){
    $('form[name=rel_f]').on("submit", function(){
        var url = $('select',this).val();
        window.open(url);    
    })
});