$(document).ready(function(){

  if($(window).width() >= 1024){
    //init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //Scene 01 - pinned
    var pinScene01 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '100%'

    })
    .setPin('#slide01 .pin-wrapper')
    .addTo(controller)
    ;

    var pinScene02 = new ScrollMagic.Scene({
      triggerElement: '#slide01',
      triggerHook: 0,
      duration: '200%'

    })
    .setPin('#slide02 .pin-wrapper')
    .addTo(controller)
    ;

    var pinScene03 = new ScrollMagic.Scene({
      triggerElement: '#slide02',
      triggerHook: 0,
      duration: '200%'

    })
    .setPin('#slide03 .pin-wrapper')
    .addTo(controller)
    ;

    var pinScene04 = new ScrollMagic.Scene({
      triggerElement: '#slide03',
      triggerHook: 0,
      duration: '200%'

    })
    .setPin('#slide04 .pin-wrapper')
    .addTo(controller)
    ;
  }
});
