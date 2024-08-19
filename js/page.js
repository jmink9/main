window.onload = function() {
$(document).ready(function(){

        var navHeight = $(".mainNav").height(); 
        //navHeight 의 높이를 구하기
    
        $(".scrollNav").hide();
        //스크롤시 나타날 객체 미리 숨기기
    
        $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
            var rollIt = $(this).scrollTop() >= navHeight; 
    // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다
    
    /*
    scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
    스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
    */
    
        if(rollIt){ 
            //윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
                $(".scrollNav").show().css({"position":"fixed"});
            }
            else{
                $(".scrollNav").hide();
            }
        });
        
    });
   
    }


    $(document).ready(function(){
        var swiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            }
        })
        
    })


    $(document).addEventListener("DOMContentLoaded", function() {
        // 버튼 요소를 가져옵니다.
        var button = document.getElementById("detailButton");
    
        // 모달 요소를 가져옵니다.
        var modal = document.getElementById("myModal");
    
        // 닫기 버튼을 가져옵니다.
        var closeBtn = document.getElementsByClassName("close")[0];
    
        // 버튼에 클릭 이벤트를 추가합니다.
        button.addEventListener("click", function() {
            modal.style.display = "block"; // 모달 보이기
        });
    
        // 닫기 버튼에 클릭 이벤트를 추가합니다.
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none"; // 모달 숨기기
        });
    
        // 모달 외부를 클릭하면 모달을 닫습니다.
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none"; // 모달 숨기기
            }
        });
    });



$(document).ready(function(){
			$('.banner:not(:first)').hide();
			
			$('.menu').click(function(){
				$('.banner').hide();
				$('.banner',this).show();
			})

		})
    
