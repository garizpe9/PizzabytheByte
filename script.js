//Yelp API
var apikey = "U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx"
var clientID = "vUaKKoVHSe-3_ow_x9Y19A"
var queryURL = "https://api.yelp.com/v3/businesses/search"


$("#nav_search").on("click", somurl)




function somurl() {
    var myurl2 = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&";
    zip = $("#Zipcodetext").val()
    parturl = "&location=" + zip;

    myurl = myurl2 + parturl

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            for (var i =0; i<10;i++){
                console.log(data.businesses[i].name)
                console.log(data.businesses[i].price)
                console.log(data.businesses[i].rating)
                console.log(data.businesses[i].coordinates)
                console.log(data)

            }
            
        }
    });
  
};



