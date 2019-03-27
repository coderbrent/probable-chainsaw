$("#search").on("click", function() {
    var searchBox = document.getElementById("searchText").value;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchBox + "&api-key=9aIh2WnWNrpl140zZP4dZOdk8s54f9Q6";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        for (i = 0; i < response.response.docs.length; i++) {
          var headline = JSON.stringify(response.response.docs[i].headline.main);
          var snippet = JSON.stringify(response.response.docs[i].snippet);
          var url = JSON.stringify(response.response.docs[i].web_url); 

          var infoCard = {
              cardHead: $("<img>").addClass("card-img-top"),
              cardBody: $("<div>").addClass("card-body"),
              cardTitle: $("<h5>").addClass("card-title").text(headline),
              cardText: $("<p>").addClass("card-text").text(snippet),
              cardBtn: $("<a href>").addClass("btn btn-primary").text("Learn More")
          }

          
          var cardHead = $("<img>").addClass("card-img-top");
          var cardBody = $("<div>").addClass("card-body");
          var cardTitle = $("<h5>").addClass("card-title").text(headline);
          var cardText = $("<p>").addClass("card-text").text(snippet);
          var cardBtn = $("<a href>").addClass("btn btn-primary").text("Learn More");
          $(cardBtn).attr(url); //This is our dynamic link button under each card...

          $(cardHead).appendTo(cardBody);
          $(cardTitle).appendTo(cardBody);
          
          $(cardBody).appendTo(infoCard).text(snippet);

          $(linkBtn).attr("href", url);
          $(linkBtn).appendTo(snippElement);
            
      }
    })
  }
)