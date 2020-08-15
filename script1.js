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
  parturl = "&location=" + zip;

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
    },
  });
}
function initMap() {
  var option = {
    zoom: 14,
    center: { lat: 41.8781136, lng: -87.6297982 },
  };

  var map = new google.maps.Map(document.getElementById("map"), option);
}
