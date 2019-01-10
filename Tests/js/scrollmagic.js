$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//Pin Sections
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

	//change manu button color

	var menuColor = new ScrollMagic.Scene({
		triggerElement: '#quienes',
		triggerHook: 0,
		duration: '100%'
	})
	.setClassToggle("#menuicon", "b")
	.addTo(controller)
	;

	var menuColor = new ScrollMagic.Scene({
		triggerElement: '#equipo',
		triggerHook: 0,
		duration: '100%'
	})
	.setClassToggle("#menuicon", "b")
	.addTo(controller)
	;
});
