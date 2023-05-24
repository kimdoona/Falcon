//popup
$('#airportLayer1').hide(); //처음에 안보이기
$('.i1 a').click(function(){
    $('#airportLayer1').fadeIn(0)
})
$('.layer-head .close').click(function(){
    $('#airportLayer1').fadeOut(0)
})

$('#airportLayer2').hide(); //처음에 안보이기
$('.i2 a').click(function(){
    $('#airportLayer2').fadeIn(0)
})
$('.layer-head .close').click(function(){
    $('#airportLayer2').fadeOut(0)
})

$('#airportLayer3').hide(); //처음에 안보이기
$('.i3 a').click(function(){
    $('#airportLayer3').fadeIn(0)
})
$('.layer-head .close').click(function(){
    $('#airportLayer3').fadeOut(0)
})

$('#passengerLayer4').hide(); //처음에 안보이기
$('.i4 a').click(function(){
    $('#passengerLayer4').fadeIn(0)
})
$('.layer-head .close').click(function(){
    $('#passengerLayer4').fadeOut(0)
})

//#board li a를 클릭하면,
$('.ticketType .board li a').click(function(){
    //#board li a의 부모인 li에 on을 추가하고,li의 나머지 형제요소들 on을 지워라 
    $(this).parent().addClass('on')
    .siblings().removeClass('on')
})

//특가 card 누르면 예매하는 곳으로
$('.card').click(function(){
    $('body,html').animate({
        scrollTop: 230
    },1000);
})


//뉴스
$(document).ready(function(){
	var height =  $(".notice").height();
	var num = $(".rolling li").length;
	var max = height * num;
	var move = 0;
	function noticeRolling(){
		move += height;
		$(".rolling").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,2000);
	$(".rolling").append($(".rolling li").first().clone());
});		



//popup calendar
$(document).ready(function(){   
    //datepicker
    var numMonth;
    var datepickerLoad = {
        init: function(){
            numMonth = 2;
            $('.datepickerArea .load').datepicker({
                showButtonPanel: false,
                numberOfMonths: numMonth,
                //minDate: toDate,
                //maxDate: "+0m",                
                closeText: "닫기",
                prevText: "이전달",
                nextText: "다음달",
                currentText: "오늘",
                monthNames: [ "01","02","03","04","05","06","07","08","09","10","11","12" ],
                monthNamesShort: [ "1","2","3","4","5","6","7","8","9","10","11","12" ],
                dayNames: [ "일요일","월요일","화요일","수요일","목요일","금요일","토요일" ],
                dayNamesShort: [ "(일)","(월)","(화)","(수)","(목)","(금)","(토)" ],
                dayNamesMin: [ "일","월","화","수","목","금","토" ],
                weekHeader: "주",
                dateFormat: "y.mm.dd D",
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: true,
                yearSuffix: "."
            });
        }
    }
    datepickerLoad.init();
});

