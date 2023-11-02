$('.tit .btn').click(function () {
  //$('.nav').toggle();
  //$('.nav').fadeToggle();
  ev.preventDefault();
  $('.nav').slideToggle();
  $(this).toggleClass("on");
});

$('.ban').slick({
  infinite: true,
  slidesToShow: 3, //한화면에 보이는 갯수
  slidesToScroll: 1, //버튼을 클릭하면 넘어가는 갯수
  dots: true,
  autoplay: true
});

$('.gallery_img').slick({
  arrows:false
});

$('.gallery_btn .play').click(function(){
  $('.gallery_img').slick('slickPlay');
});

$('.gallery_btn .pause').click(function(){
  $('.gallery_img').slick('slickPause');
});

$('.gallery_btn .prev').click(function(){
  $('.gallery_img').slick('slickPrev');
});

$('.gallery_btn .next').click(function(){
  $('.gallery_img').slick('slickNext');
});


// 탭메뉴
//.next() 는 바로 밑 요소(바로 아래 동생)
//.parent() 는 부모 요소
//.siblings() 는 나를 제외한 형제들
//.find() 하위요소 (내 안에 있는 요소들)

let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();

$('.tab_menu>ul>li>a').click(function (ev) {
  ev.preventDefault();
  var $this = $(this); //변수를 만들때 사용할 수 있는 특수문자 -> $, _ 두가지
  //console.log($this)
  $this.next('ul').show();
  $this.parent('li').siblings('li').find('ul').hide();



  $this.parent('li').addClass('active');
  $this.parent('li').siblings('li').removeClass('active');
});


// lightGallery
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});


// layer popup
$('.layer').click(function(ev){
  ev.preventDefault();//새로고침 막기
  //$('#layer').show();
  $('#layer').fadeIn();
})

$('#layer .close').click(function(ev){
  ev.preventDefault();//새로고침 막기
  //$('#layer').show();
  $('#layer').fadeOut();
})


// window 창 열기


// $(".window").click(function(ev){
//   ev.preventDefault();
//   window.open("popup.html", "popup", top=500,left=500,width=900,height=590");
// })

// window창 열기
$('.window').click(function(ev){
  ev.preventDefault();
  window.open("popup.html", "popup", "top=500,left=500,width=900,height=590");
})