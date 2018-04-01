// variables



var topic = ["cat", "dog", "horse", "pig"];



// functions
function createButton(){
    $("#buttons").empty();
for (var i=0; i<topic.length; i++) {
    var newButton = $("<button class='btn btn-sm btn-info' id='animals'>");
    newButton.val(topic[i]);
    newButton.text(topic[i]);
    $("#buttons").append(newButton);
}};

$("#buttons").on("click","#animals", function animal(){
    $("#image-place").empty();
    var animal = $(this).val();
    console.log(animal);
    var queryURL =" https://api.giphy.com/v1/gifs/search?q="+animal +"&api_key=YOYA8G6KlnPgndOHh6MdNFaw0WyCRqqm&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var results = response.data;
        for (var i=0; i<results.length; i++){
            var gifDiv = $("<div class='complete'>");
            var rating = results[i].rating;
            var ratingP=$("<p>").text("Rating: "+rating);
            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height_still.url);
            topicImage.attr("data-still", results[i].images.fixed_height_still.url);
            topicImage.attr("data-animate", results[i].images.fixed_height.url);
            topicImage.attr("data-state", "still");
            topicImage.attr("class", "gif");
            console.log(topicImage);

            gifDiv.prepend(ratingP);
            gifDiv.prepend(topicImage);

            $("#image-place").prepend(gifDiv);
        }
    });
});

$("#image-place").on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
});







$("#submit-button").on("click", function(event){
    event.preventDefault();
    var userInputVal = $("#user-input").val().trim();
    console.log(userInputVal);
    topic.push(userInputVal);
    createButton();
});

// psudocode
// ** make an array for the topic
// ** make a for loop that cycles through the array and creates a button with the array item
// ** make api key for giphy
// ** make the correct "query URL" to get 10 images with appropriate rating










// main
    createButton()
