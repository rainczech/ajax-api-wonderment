


var topic = ["cat", "dog", "horse", "pig"];

for (var i=0; i<topic.length; i++) {
    var newButton = $("<button></button>");
    newButton.text(topic[i]);
    $("#buttons").append(newButton);
}




// var queryURL = "https://api.giphy.com/v1/gifts/search?q="+animal+"&api-key=uvMzqP4htDb03CqytfpkBbkuGbBVLLj9$limit=10";
