
$(".projects-btn").on("click", function(event){
    event.preventDefault()
    $(".more-projects").empty();

    var projects = $("<lu>").append(

        $("<a class = 'list' href='https://rrjethva.github.io/project-1/' target='_blank'>").text("Bravo Events - Group Project"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Train-Schedule/' target='_blank'>").text("Train Scheduler"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Giphy-API/' target='_blank'>").text("Giphs' and giphs'"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/TriviaGame/' target='_blank'>").text("Automotive Trivia"),
        $("<br>"),
        $("<a class = 'list' href='https://kevinperez1996.github.io/Unit-4-game/' target='_blank'>").text("Crystal Collectors"),
        $("<br>"),
    );

    $(".more-projects").append(projects);
})