$(document).ready(function() {

   $('body.page-lead .page-header-1').anystretch("img/top-image-1.jpg", {speed: 150}); 
   $('article.page-header-1.v2').anystretch("img/top-image-2.jpg", {speed: 150}); 
   $('body.page-sales article.personal-trainer').anystretch("img/top-image-3.jpg", {speed: 150});  
   $('body.page-sales article.boxer').anystretch("img/top-image-4.jpg", {speed: 150});	
	

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
});