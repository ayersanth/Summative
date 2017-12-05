
mapboxgl.accessToken = 'pk.eyJ1IjoiYXllcnNhbnRoIiwiYSI6ImNqYW43cmN0azM4cWYycXBsY3p2ZzN5bmIifQ.QMwrJfUgUurCbUJ0XezFPg';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/ayersanth/cjan7fb2hdf5l2rnymzb5iw5b',
	center: [174.7762, -41.2865],
	zoom: 13
});


	

var init = function(){

	var domItems = [];
	var btn = document.getElementById('arrowDown');
	btn.onclick = openNav;
	// jQuery('#map, #mapBox').hide();

	// Dom Queries

	// var price = document.getElementById('price');
	// var select = document.getElementById('select');
	// var submit = document.getElementById('submit');
	// var content = document.getElementById('contentPanel');

	// domItems.push(price, select, submit, btn, content);

	// // Click events
	// price.onclick = pricingDomChange;

	// return domItems;

}();


function openNav() {

	var scrollDown = document.getElementById("anchor");

    if (document.getElementById("arrowDown").classList.contains("closed")){
    	document.getElementById("mapBox").style.height = "500px";
    	// document.getElementById("spiderBox").style.height = "0px";
    	document.getElementById("arrowDown").classList.add("open");
		document.getElementById("arrowDown").classList.remove("closed");
        $("html").animate({
            'scrollTop': $(this).offset().top
        }, );
	   
	}

		
     else {
    	document.getElementById("mapBox").style.height = "0";
    	// document.getElementById("spiderBox").style.height = "700px";
    	document.getElementById("arrowDown").classList.add("closed");
		document.getElementById("arrowDown").classList.remove("open");
		// scrollDown.scrollIntoView(false);
  //   	scrollDown.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    };

    // window.scrollTo(0, document.body.scrollHeight

    // $('html,body').animate({ scrollTop: scrollDown.offset().top }, 'slow');

    // setTimeout(function(){
    // 	$('html,body').animate({
    // 	 obj.scrollTop: obj.scrollHeight; 
    // 	}, 'slow');
    // }, 5000);

}


