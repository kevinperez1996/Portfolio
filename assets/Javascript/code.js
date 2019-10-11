
var firebaseConfig = {
    apiKey: "AIzaSyCjikVm2mF1FHvUfaXe7rIzs_HnAAADOr8",
    authDomain: "portfolio-comments-90836.firebaseapp.com",
    databaseURL: "https://portfolio-comments-90836.firebaseio.com",
    projectId: "portfolio-comments-90836",
    storageBucket: "portfolio-comments-90836.appspot.com",
    messagingSenderId: "1038243048434",
    appId: "1:1038243048434:web:61a8054a86c48cecb1596b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(".comments-btn").on("click", function (event) {

if ($(".comments-box").val() === ""){
    alert("Please fill in a comment");
}
else {
    var comments = $(".comments-box").val().trim();

    event.preventDefault();
    
    $(".comments-box").val("");

    database.ref().push(comments);

    var gracias = $("<div>").append (

     $("<p>").text("Thanks for your feedback!")
    );

    $("#thanks").append(gracias);
}
});



$(".projects-btn").on("click", function (event) {
    event.preventDefault()
    $(".more-projects").empty();

    var projects = $("<lu>").append(

        $("<a class = 'list' href='https://rrjethva.github.io/Eventbrite-Google-API/' target='_blank'>").text("Bravo Events - Group Project"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Train-Schedule/' target='_blank'>").text("Train Scheduler"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/giphy/' target='_blank'>").text("Giphs' and giphs'"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/TriviaGame/' target='_blank'>").text("Automotive Trivia"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Unit-4-game/' target='_blank'>").text("Crystal Collectors"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Word-Guess-Game/' target='_blank'>").text("Artist Guessing Game"),
        $("<br>"),
    );

    $(".more-projects").append(projects);
});