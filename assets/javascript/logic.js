$( document ).ready(function() {
    console.log( "ready!" );

    $("button").on("click", function() {
    	var city = (this).attr("data-city");

    	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        city + "&api_key=aRzEvvatJe5JykmA2OazGtZWxh3SW1Gc" 

        $.ajax({
        	 
        	 url: queryURL,
        	 method: 'GET'     

        	   }).then(function(response) {
        	   		console.log(response);
        	   });



    });
























//end of document parenthesis below    
});