document.addEventListener("scroll", function(e) {

  if(window.scrollY >= window.innerHeight){
    $('#menu').addClass('bgMenu');
  }
  else if(window.scrollY <= window.innerHeight){
    $('#menu').removeClass('bgMenu');
  }
})
