$(window).scroll(function() {

  var wScroll = $(this).scrollTop();


  //  console.log('translate('+ wScrol +','+ wScroll/2 +'%)');

  $('.midground').css({
    'transform':'translate('+ 0+'%' +','+ wScroll/2 +'%)'

  });

  $('.foreground').css({
    'transform':'translate(0px , '+ -wScroll/15 +'%)'

  });


  $('.back_bird').css({
    'transform':'translate('+wScroll/2+'%,'+wScroll/3+'%)'
  });

  if(wScroll > $('#gallery').offset().top -500) {
    let aspectRatio = wScroll / window.innerHeight;
    console.log('aspect ration '+aspectRatio);
    $('.models').each(function(i){
      //  console.log("i : "+i);
        setTimeout(function(){
          $('.models').eq(i).addClass('modelVisible');
        } , (1+i)*100);
    });


    let periscopeOffset = 2.12 ;

    if(wScroll > periscopeOffset ){
      $('#periscopeWindow').css({'background-position' : 'center '+(aspectRatio - periscopeOffset)*150 + 'px' });
    }else{
        $('#periscopeWindow ').css({'background-position' : 'center 0px' });
    }

  }else{
    $('.models').removeClass('modelVisible');
  }


});
