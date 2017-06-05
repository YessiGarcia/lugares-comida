function initMap(){

	var laboratoriaMexico = {lat: 19.417704, lng: -99.164886};
	var restaurante1= {lat:19.4143753,lng:-99.2235053};

	var map = new google.maps.Map(document.getElementById('map'),{
	zoom: 18,
	center:laboratoriaMexico
	});

  	var marker = new google.maps.Marker({
  	position:laboratoriaMexico,
  	map: map
    });

    /*var marker2 = new google.maps.Marker({
  	position:restaurante1,
  	map: map
    });*/
}
