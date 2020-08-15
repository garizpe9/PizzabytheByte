//Yelp API
var apikey =
  "U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx";
var clientID = "vUaKKoVHSe-3_ow_x9Y19A";
var queryURL = "https://api.yelp.com/v3/businesses/search";

$("#nav_search").on("click", sumurl);

function sumurl() {
  var myurl2 =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&";
  zip = $("#Zipcodetext").val();
  parturl = "&location=" + zip

  myurl = myurl2 + parturl;

  $.ajax({
    url: myurl,
    headers: {
      Authorization:
        "Bearer U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx",
    },
    method: "GET",
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < 10; i++) {
        var tBody = $("tbody");
        var tRow = $("<tr>");
        var busnam = $("<td>").text(data.businesses[i].name);
        var busprice = $("<td>").text(data.businesses[i].price);
        var busrate = $("<td>").text((data.businesses[i].rating)+"/5");
        var busopen = $("<td>").text(data.businesses[i].is_closed)
        var busclosed=data.businesses[i].is_closed
        if (busclosed = true){
         
          var busopen = $("<td>").text("Open for pizza!")          
        }else var busopen = $("<td>").text("Sorry Closed!")
        tRow.append(busnam,busprice,busrate,busopen);
        tBody.append(tRow);
        // + data.businesses[i].coordinates.latitude + ", " + data.businesses[i].coordinates.longitude)
      }
      
    }
  })
}
// $.ajax({
//   url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8781136%2C-87.6297982&radius=5000&keyword=Pizza&key=AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o",
//   headers: {
//     Authorization:
//     "AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o",
//   },
//   method: "GET",
//   dataType: "json",
//   success: function (data) {console.log(data)
//   console.log(data.results)
//   var retrieved =[]

//   for (var i = 0; i <data.results.length; i++) {
// retrieved.push({lat:data.results[i].geometry.location.lat,lng:data.results[i].geometry.location.lng,name:data.results[i].name})
//   }
    
//   console.log(retrieved)
//   initMap(retrieved)
    
//   }}) 





    
    
//     function initMap(value) {
//       var myLatLng = {lat: 41.8781136, lng: -87.6297982};
    
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 14,
//         center: myLatLng
//       });
    
//       for (var i = 0; i < value.length; i++){
//       var marker = new google.maps.Marker({
//         position: {lat: value[i].lat, lng: value[i].lng}, 
//         map: map,
//         title: value[i].name
//       });
//     }

//   }
