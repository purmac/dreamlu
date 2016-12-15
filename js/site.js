window.addEvent('domready', function() {

	
	
	var conceptSlide = new Fx.Slide('conceptart');
	var productionSlide = new Fx.Slide('production');
	var bioSlide = new Fx.Slide('bio');
	var contentScroll = new Fx.Scroll('content2');
	var sel = "concept";
	
	var current = 0;
	var offset = 210;
	var maxHeight;
	//initialization
	productionSlide.hide();
	bioSlide.hide();
	
	
	$('up').addEvent('mouseover',function(e){
		$('up').setStyles({
			background: 'url(css/up_in.png) 0 0 no-repeat'
		});
	});
	
	
	$('up').addEvent('mouseout',function(e){
		$('up').setStyles({
			background: 'url(css/up.png) 0 0 no-repeat'
		});
	});
	
	$('down').addEvent('mouseover',function(e){
		$('down').setStyles({
			background: 'url(css/down_in.png) 0 0 no-repeat'
		});
	});
	
	
	$('down').addEvent('mouseout',function(e){
		$('down').setStyles({
			background: 'url(css/down.png) 0 0 no-repeat'
		});
	});
	
	//scrollbar
	$('up').addEvent('click',function(e){
		if(current - offset > 0)
		{
			contentScroll.start(current, current-offset);
			current = current - offset;
		}
		else {
			contentScroll.start(current, 0);
			current = 0;
		}
	});
	
	$('down').addEvent('click',function(e){
		maxHeight = $('content2').scrollHeight-offset;
		if(current + offset < maxHeight){
			contentScroll.start(current, current + offset);
			current = current + offset;
		}
		else{
			contentScroll.start(current, maxHeight);
			current = maxHeight;
		}
	});
	

	//slide menu
	$('conceptart_link').addEvent('click', function(e){
		e.stop();
		
		if(sel == "production")
		{
			productionSlide.slideOut().chain(function(){conceptSlide.slideIn();});
		}
		
		if(sel == "bio")
		{
			bioSlide.slideOut().chain(function(){conceptSlide.slideIn();});
		}
		$('scrollbar').setStyle('visibility','visible');
		sel = "concept";
		
	});
	
	$('production_link').addEvent('click', function(e){
		e.stop();
		if(sel == "concept")
		{
			conceptSlide.slideOut().chain(function(){productionSlide.slideIn();});
		}
		if(sel == "bio")
		{
			bioSlide.slideOut().chain(function(){productionSlide.slideIn();});
		}
		$('scrollbar').setStyle('visibility','hidden');
		sel = "production";
	});
	
	$('bio_link').addEvent('click', function(e){
		e.stop();
		if(sel == "concept")
		{
			conceptSlide.slideOut().chain(function(){bioSlide.slideIn();});
		}
		if(sel == "production")
		{
			productionSlide.slideOut().chain(function(){bioSlide.slideIn();});
		}
		$('scrollbar').setStyle('visibility','hidden');
		sel = "bio";
	});

});