$( document ).ready(function() {
    console.log( "ready!" );

    $("button").on("click", function() {
    	var city = $(this).attr("data-city");

    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        city + "&api_key=aRzEvvatJe5JykmA2OazGtZWxh3SW1Gc" 

        var cityArray = ["boston", "philadelphia", "toronto", "montreal", "london", "reykjavik"]

        $.ajax({
        	 
        	 url: queryURL,
        	 method: 'GET'  

        	   })

        .then(function(response) {

        	   		var results = response.data;


        	   		 	for (var i = 0; i < results.length; i++) {

        	   		 		var gifDiv = $("<div class = 'item'>");


	        	   		 	var rating = results[i].rating

	        	   		 	var p = $("<p>").text("Rating: " + rating);


	        	   		 	var cityImage = ("<img>");

	        	   		 	cityImage.attr("src", results[i].images.fixed_height.url);


	        	   		 	gifDiv.prepend(p);

	        	   		 	gifDiv.prepend(cityImage);


	        	   		 	$("gifsHere").prepend(gifDiv);


	        	   		 		console.log(response);

        	   		 	}
        	   		});
        	   });

    // rendering the buttons

    function renderButtons() {

    	$("#cityView").empty();

    	for (var i = 0; i < cityArray.length; i++) {
    		
    		var button = $("<button>");

    		button.addClass("city");

    		button.attr("data-name", cityArray[i]);

    		button.text(cityArray[i]);

    		$("#cityView").append(button);
    	}
    }

    $("#add-city").on("click", function(event) {

    	event.preventDefault();

    	var city1 = $("#city-input").val().trim();

    	cityArray.push(city1);

    	renderButtons();
    });

    renderButtons();
    
    });