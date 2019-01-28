$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	//Pin Sections
    if($(window).width() >= 1024) {
        var pinScene01 = new ScrollMagic.Scene({
        	triggerElement: '#quienes',
        	triggerHook: 0,
        	duration: '120%'
        })
        .setPin('#quienes .pin-wrapper')
        .addTo(controller)
        ;
    }
  var pinscene02 = new ScrollMagic.Scene({
    triggerElement: '#productos',
    triggerHook: 0,
    duration: '120%'
  })
  .setPin('#productos .pin-wrapper')
  .addTo(controller)
  ;

  var pinscene04 = new ScrollMagic.Scene({
    triggerElement: '#contacto',
    triggerHook: 0,
    duration: '120%'
  })
  .setPin('#contacto .pin-wrapper')
  .addTo(controller)
  ;

	//change manu button color

	var menuColor01 = new ScrollMagic.Scene({
		triggerElement: '#quienes',
		triggerHook: 0,
		duration: '120%'
	})
	.setClassToggle("#menuicon", "b")
	.addTo(controller)
	;

	var menuColor02 = new ScrollMagic.Scene({
		triggerElement: '#equipo',
		triggerHook: 0,
		duration: calcHeight()
	})
	.setClassToggle("#menuicon", "b")
	.addTo(controller)
	;

});


function calcHeight(){
    var relativeheight = String(parseInt(Math.round(document.getElementById('equipo').offsetHeight/$(window).height() * 100)));
    return relativeheight.concat("%");
}