$(document).ready(function(){
  $('.bxslider').bxSlider({
		auto: true, /* 이미지 회전 자동 시작 */ 
		speed: 400, /* 다음 이미지로 바뀌는 데 걸리는 시간 ms(mili seconds)단위로 500ms가 기본 값*/ 
		pause: 4000, /* 하나의 이미지가 멈춰서 보여지는 시간 40000ms가 기본 값 */ 
		mode:'fade', /* 이미지가 교체되는 방식 'fade', 'horizontal', 'vertical'을 사용할수 있다*/ 
		/*autoControls: true, 시작 중지 버튼을 보여지게 한다 */  
		pager:true, /* 페이지 바로가기 버튼 보여지게 한다 */ 
	});
    });
