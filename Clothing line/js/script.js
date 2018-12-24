var render = true;

$(window).scroll(function() {


  var wScroll = $(this).scrollTop();

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
    var aspectRatio = wScroll / window.innerHeight;
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

  let periscopeOpacity = wScroll - ($('.promoTextContainer').offset().top / wScroll);

  $('.promoTextContainer').css({'opacity' : periscopeOpacity+''});

//  console.log(wScroll / window.innerHeight);

  let screenOffset = wScroll / window.innerHeight;
  let blogOffset = 2 ;



  if(screenOffset >= blogOffset && render === true) {

    let offset = $('.blogs').offset().top-$(window).height() - wScroll - 750 ;

      console.log($('.blogs').offset().top+","+$(window).height()+","+wScroll);

      let x = Math.abs(Math.sin(wScroll/300))*280*(-1);
      let y = Math.sin(wScroll/300)*100*(-1) ;

      let yy = -y

      console.log($('.post1').offset().top  - $('.post2').offset().top);

      let heightDifference = $('.post1').offset().top  - $('.post2').offset().top;




  //  let myyOffset = Math.min( 0 , x);
    $('.post1').css({'transform' : 'translate('+x+'px,'+y+'px)'});
    $('.post2').css({'transform' : 'translate('+0+'px,'+yy+'px)'});
    $('.post3').css({'transform' : 'translate('+-x+'px,'+y+'px)'});
  }

});


$(document).ready(function(){
  $(".readMore").on('click' , function(){

    let className = '.'+$(this).attr('id');

    let visibility = $(className).css('display');

    if(visibility == 'none') {
      visibility = 'inline';
      $(this).html('Show less');
    }
    else {
      visibility = 'none';
      $(this).html('Read more');
    }

    $(className).css({'display' : visibility});



  } );
});
