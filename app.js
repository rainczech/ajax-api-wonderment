// variables



var topic = ["cat", "dog", "horse", "pig"];




// functions
function start(){
for (var i=0; i<topic.length; i++) {
    var newButton = $("<button></button>");
    newButton.text(topic[i]);
    $("#buttons").append(newButton);
}};

$("button").on("click", function animal(){
    var animal.val(this);
    var queryURL = "https://api.giphy.com/v1/gifts/search?q="+animal+"&api-key=uvMzqP4htDb03CqytfpkBbkuGbBVLLj9$limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var imageUrl = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageUrl);
        $("#image-place").append(image);
    })
})

// psudocode
// ** make an array for the topic
// ** make a for loop that cycles through the array and creates a button with the array item
// ** make api key for giphy
// ** make the correct "query URL" to get 10 images with appropriate rating










// main
start();


