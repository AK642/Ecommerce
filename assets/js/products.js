$(document).ready(function() {

    $('#navbarTogglerDemo02 a').on('click', function() {
      $('a.active').removeClass('active');
      $(this).addClass('active');
    });
  
  
    $(window).scroll(function(){
      if($(window).scrollTop()) {
        $(".header-section").css("background"," rgb(250, 250, 250)").css("transition","0.5s").css("box-shadow","0 0.3px 9px gray");
        $(".scrolltop").css("visibility","visible");
      }
      else {
        $(".header-section").css(
            "background","transparent"
        ).css("box-shadow","none");
        $(".scrolltop").css("visibility","hidden");
      }
    });

    $('.next').click(function(){
        $('.paging').find('.page-number.active').next().addClass('active').siblings().removeClass('active');
    })
    $('.prev').click(function(){
        $('.paging').find('.page-number.active').prev().addClass('active').siblings().removeClass('active');
    })
    $('.page-number').on('click',function(){
        $('.page-number.active').removeClass('active');
        $(this).addClass('active');
    })
  
});