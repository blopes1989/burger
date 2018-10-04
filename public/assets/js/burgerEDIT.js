$( document ).ready(function() {
console.log('are you working?')
//pull database
$.get("/")
.then((results) => {
    console.log("test")
}
)

//display database


// submit button that listens to click function that captures form
$(".submit").click(function (event) {
    event.preventDefault()
    console.log("burger_name")
    console.log($(".submission").val())
    $(".submission").val()
    $( ".submissionCard" ).text( $( ".submission" ).val() )

    $.post("api/data/burger")
    .then((event) =>{
    

    })
})

//display submitted in card


// devour button pushes burger into submitted to database
$(".devour").click(function (event){
    event.preventDefault()
    $(".submission")

    //burger needs to go from not devoured to devoured in database
})

})
