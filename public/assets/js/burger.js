//pull database
$.get("/api/data/burger")
.then((results) => {
    console.log(results)
}
)

//display database


// submit button that listens to click function that captures form
$(".submit").click(function (event) {
    event.preventDefault()
    $(".submission").val()
    $( ".submissionCard" ).replaceWith( $( ".submission" ) )

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


