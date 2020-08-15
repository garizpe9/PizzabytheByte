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
      $("#pizzarating").append("<tbody>")
      for (var i = 0; i < 10; i++) {
        $("#pizzarating").append("<tr>").append("<td id='" + i + "'>")
        $("#" + (i)).html(data.businesses[i].name + ", " + data.businesses[i].price + ", " + data.businesses[i].rating + ", " + data.businesses[i].coordinates.latitude + ", " + data.businesses[i].coordinates.longitude)
      }
      //$("#" + (i)).html(data.businesses[i].name + ", " + data.businesses[i].price + ", " + data.businesses[i].rating + ", " + data.businesses[i].coordinates.latitude + ", " + data.businesses[i].coordinates.longitude)

    }
  })
}

var googleurl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyCWWS-XgxQJjyRBc1Yyi7wAxaep1RJGN4o"
$.ajax({
  url: googleurl,
  method: "GET",
})
  .then(function(resp){
    console.log(resp)
  })

