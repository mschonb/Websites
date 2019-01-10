$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Scene 1 - pin the second section
	var pinScene01 = new ScrollMagic.Scene({
		triggerElement: '#quienes',
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#quienes .pin-wrapper')
	.addTo(controller)
	;

  var pinscene02 = new ScrollMagic.Scene({
    triggerElement: '#productos',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#productos .pin-wrapper')
  .addTo(controller)
  ;

  var pinscene03 = new ScrollMagic.Scene({
    triggerElement: '#equipo',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#equipo .pin-wrapper')
  .addTo(controller)
  ;

  var pinscene04 = new ScrollMagic.Scene({
    triggerElement: '#contacto',
    triggerHook: 0,
    duration: '100%'
  })
  .setPin('#contacto .pin-wrapper')
  .addTo(controller)
  ;
});
