//Pizza time
$("#Pizzatime").html(moment().format('LT'))

//Yelp API
var apikey =
  "U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx";
var clientID = "vUaKKoVHSe-3_ow_x9Y19A";
var queryURL = "https://api.yelp.com/v3/businesses/search";

// $("#nav_search").on("click", sumurl);


function getYelp(zipcode) {
  var URL =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&";
  URL += "&location=" + zipcode;


  $.ajax({
    url: URL,
    headers: {
      Authorization:
        "Bearer " + apikey,
    },
    method: "GET",
    dataType: "json",
    success: buildTable,
  });
}

function buildTable(data) {
  $("tbody").empty()
  for (var i = 0; i < 20; i++) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    var busnam = $("<td>").text(data.businesses[i].name);
    var busprice = $("<td>").text(data.businesses[i].price);
    var busrate = $("<td>").text(data.businesses[i].rating + "/5");
    var busopen = $("<td>").text(data.businesses[i].is_closed);

    var busclosed = data.businesses[i].is_closed;
    if ((busclosed = true)) {
      var busopen = $("<td>").text("Open for pizza!");
    } else var busopen = $("<td>").text("Sorry Closed!");
    tRow.append(busnam, busprice, busrate, busopen);
    tBody.append(tRow);
    // + data.businesses[i].coordinates.latitude + ", " + data.businesses[i].coordinates.longitude)
  }
}
// $.ajax({
//   url: GoogleAPILatLon(),
//   headers: {
//     Authorization:
//       "AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o",
//   },
//   method: "GET",
//   dataType: "json",
//   success: function(response){
//     console.log(response)
//   }
// })


callGoogle()
$("#nav_search").click(function () {
  var zipcode = $("#Zipcodetext").val().trim()
  $("#Zipcodetext").val("")

  callGoogle(zipcode);
})

function callGoogle(zipcode = "60611") {
  getYelp(zipcode)
  $.get(GoogleAPIGeoCodeURL(zipcode))
    .then(function (data) {
      var lat = data.results[0].geometry.location.lat
      var lng = data.results[0].geometry.location.lng

      $.get(GoogleAPILatLonURL(lat, lng))
        .then(function (response) {
          displayMap(response, { lat, lng })
        })
        .catch(function (err) {
         // console.log(err)
        })
    })
    .catch(function (err) {
      // console.log(err)
    })
}

function GoogleAPIGeoCodeURL(address) {

  var CORS = "https://cors-anywhere.herokuapp.com/"
  var baseURL = "https://maps.googleapis.com/maps/api/geocode/json"
  var address = "?address=" + address
  var API_KEY = "&key=AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o"

  return CORS + baseURL + address + API_KEY
}

function GoogleAPILatLonURL(lat, lng, radius = "50000", keyword = "Pizza") {

  var CORS = "https://cors-anywhere.herokuapp.com/"
  var baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
  var location = "?location=" + lat + "%2C" + lng
  var API_KEY = "&key=AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o"
  var radius = "&radius=" + radius
  var keyword = "&keyword=" + keyword

  return CORS + baseURL + location + radius + keyword + API_KEY
}

function displayMap(data) {
  var retrieved = []

  for (var i = 0; i < data.results.length; i++) {
    retrieved.push({ lat: data.results[i].geometry.location.lat, lng: data.results[i].geometry.location.lng, name: data.results[i].name })
  }

  initMap(retrieved, data.results[0].geometry.location)
}

function initMap(value, myLatLng) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  for (var i = 0; i < value.length; i++) {
    new google.maps.Marker({
      position: { lat: value[i].lat, lng: value[i].lng },
      map: map,
      title: value[i].name
    });
  }

}




