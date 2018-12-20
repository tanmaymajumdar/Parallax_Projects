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

  if(wScroll > $('.itemGrid').offset().top - 500) {
  $('.item1').each(function(i){

    setTimeout(function() {
      $('.item1').eq(i).addClass('successfully-saved');
    } , 150 * (i+1));
  });
  }
});
