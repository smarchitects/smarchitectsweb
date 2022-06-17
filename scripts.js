lightGallery(document.getElementById('lightgallery-1'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-3'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-4'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-5'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-6'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-7'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-8'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-9'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-10'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-11'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-12'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-13'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-14'), {
  speed: 500,
  download: false
});

lightGallery(document.getElementById('lightgallery-vz'), {
    speed: 500,
    download: false
});

$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

$(window).on('load', function(){ 
  $('.lazy-div').each(function(){
    var background = $(this).attr("data-main");
    $(this).css("background-image","url("+ background +")");
  });

  $('.lazy-img').each(function(){
    var background = $(this).attr("data-main");
    $(this).attr("src",background);
  });
});



$(".testimonial-slider-container").slick({
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: false,
    infinite: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
    
});


$( document ).ready(function() {
  
    AOS.init({
      duration: 2500 // values from 0 to 3000, with step 50ms
    });

    $(".team-member").click(function(){
        var target = $(this).attr("data-target");
       $(".popup").each(function(){
         if($(this).attr("data-pop") == target){
           $(this).addClass("onscreen");
           console.log("bob");
         }});
      $(".popUpOverlay").addClass("onscreen");
    });
   
   $(".popUpOverlay").click(function(){
   $(".popup").removeClass("onscreen");
      $(".popUpOverlay").removeClass("onscreen");
    });
   
     
   $(".popupX").click(function(){
     $(".popup").removeClass("onscreen");
     $(".popUpOverlay").removeClass("onscreen");
   })
  
  });


