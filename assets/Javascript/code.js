
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

$("#contactSubmitButton").on("click", function (event) {
    event.preventDefault();

if ($("#contactName").val() === "" || $("#contactEmail").val() === "" ){
    alert("Please fill in required fields");
}
else {

    var formInfo = [];
    var contactName = $("#contactName").val().trim();
    var contactEmail = $("#contactEmail").val().trim();
    var contactComments = $("#contactComments").val().trim();


    formInfo.push({
        name: contactName,
        email: contactEmail,
        comments: contactComments
    })
    
    $("#contactName").val("");
    $("#contactEmail").val("");
    $("#contactComments").val("");

    database.ref().push(formInfo);
   
    var gracias = $("<div>").append (

     $("<p>").text("Thank you! your form had been submitted!")
    );

    $("#thanks").append(gracias);
}
});
