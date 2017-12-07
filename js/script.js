(function(){

	//  Starting view --------------------------------------------
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXllcnNhbnRoIiwiYSI6ImNqYW43cmN0azM4cWYycXBsY3p2ZzN5bmIifQ.QMwrJfUgUurCbUJ0XezFPg';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/ayersanth/cjan7fb2hdf5l2rnymzb5iw5b',
		center: [174.7762, -41.2865],
		zoom: 13
	});
	// End --------------------------------------------


	// Tokens Position --------------------------------------------
	
	var geojson = {

		type: 'FeatureCollection',
		features: [{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [174.786389, -41.272989]
			},
			properties: {
				title: 'Mapbox',
				description: 'Washington, D.C.'
			}
		},

		{
		  	type: 'Feature',
		  	geometry: {
		    	type: 'Point',
			    coordinates: [174.776614, -41.278502]
		  	},
		  	properties: {
			    title: 'Mapbox',
			    description: 'San Francisco, California'
	  	}	
	}]
	};
	// End --------------------------------------------

	// Add Markers to Map --------------------------------------------
	geojson.features.forEach(function(marker) {

	// create a HTML element for each feature
	var el = document.createElement('div');
	el.className = 'marker';

	// make a marker for each feature and add to the map
	new mapboxgl.Marker(el)
	.setLngLat(marker.geometry.coordinates)
	.addTo(map);
	});
	// End --------------------------------------------

	})();


var init = function(){

	var domItems = [];
	var btn = document.getElementById('arrowDown');
	btn.onclick = openNav;
	jQuery('#anchor').hide();

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
    	document.getElementById("anchor").style.height = "200px";
    	document.getElementById("arrowDown").classList.add("open");
		document.getElementById("arrowDown").classList.remove("closed");
		jQuery('#anchor').show();
        $("html").animate({
            'scrollTop': $(this).offset().top
        });
	} else {
    	document.getElementById("mapBox").style.height = "0";
		document.getElementById("anchor").style.height = "0";
    	document.getElementById("arrowDown").classList.add("closed");
		document.getElementById("arrowDown").classList.remove("open");
    }

}


