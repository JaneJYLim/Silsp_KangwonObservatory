//서브메뉴 구현

$("#mainMenu li").mouseover(function(){
    $(this).children(".subMenu").stop().fadeIn();
});

$("#mainMenu li").mouseout(function(){
    $(this).children(".subMenu").stop().fadeOut();
});

//슬라이드 구현
function fnSlide() {
$("#slideFadeFrame>a:first").fadeOut(1000, function(){
    $("#slideFadeFrame>a:first").insertAfter("#slideFadeFrame>a:last");
});
$("#slideFadeFrame>a:nth-child(2)").fadeIn(1000);
}
setInterval(fnSlide, 3000);

//공지사항 갤러리 탭 구현
$("#bbsNotice button").click(function(){
    $("#bbsNotice table").css({"display":"none"});
    $("#bbsGallery #gallery").css({"display":"none"});
    $("#bbsGallery button").css({"top":"10px"});
    $("#bbsNotice table").css({"display":"block"});
});
$("#bbsGallery button").click(function(){
    $("#bbsNotice table").css({"display":"none"});
    $("#bbsGallery #gallery").css({"display":"none"});
    $("#bbsGallery #gallery").css({"display":"block"});
    $("#bbsGallery button").css({"top":"11px"});
    $("#bbsGallery button").css({"z-index":"2"});
});

//팝업레이어
$("table tr:first").click(function(){
    $("#layerPopupBg").css({"display" : "block"});
});

$("#closeBtn button").click(function(){
    $("#layerPopupBg").css({"display" : "none"});
});