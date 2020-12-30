function myFunction() {
    var y = document.getElementById("header-section-sidebar");
    y.classList.add("addClass");
    var yy = document.getElementById("wrapperBg");
    yy.classList.add("active");
    
}
function myFunctionSidebar() {
    var x = document.getElementById("header-section-sidebar");
    x.classList.remove("addClass") ;
    var xx = document.getElementById("wrapperBg");
    xx.classList.remove("active");
    
}
function RemoveSide() {
    var x = document.getElementById("header-section-sidebar");
    x.classList.remove("addClass") ;
    var xx = document.getElementById("wrapperBg");
    xx.classList.remove("active");   
}

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
  
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}