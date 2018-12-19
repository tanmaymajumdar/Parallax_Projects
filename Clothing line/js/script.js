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

//  console.log(wScroll/window.innerWidth);
});
