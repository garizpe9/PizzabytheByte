
var queryURL = "https://api.yelp.com/v3/businesses/search"

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(data) {
    console.log(data);
  })



  function initMap(){
    var option = {
      zoom: 14,
      center: {lat: 41.8781136, lng:-87.6297982}
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), option);

  }
  initMap() 

