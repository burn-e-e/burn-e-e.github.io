   //scrolll
$(document).ready(function(){

     $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('header').toggleClass('toggle');
     });
   
     $(window).on('scroll load',function(){
   
       $('#menu').removeClass('fa-times');
       $('header').removeClass('toggle');
   
       if($(window).scrollTop() > 0){
         $('.top').show();
       }else{
         $('.top').hide();
       }
   
     });
   
     // smooth scrolling 
   
     $('a[href*="#"]').on('click',function(e){
   
       e.preventDefault();
   
       $('html, body').animate({
   
         scrollTop : $($(this).attr('href')).offset().top,
   
       },
         100, 
         'linear'
       );
   
     });
   
   });
   function getIP(json) {
    var ipAddress = "Your IP address is " + json.ip;
    document.getElementById("ip-address-phone").innerHTML = ipAddress;
  }

  var script = document.createElement("script");
  script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
  document.body.appendChild(script);