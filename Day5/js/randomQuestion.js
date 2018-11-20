var questionId = null;
$.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:1234/randomquestion/api",
    success: function(data){
        console.log(data);
        $("#QuestionShow").text(data.ques.content);
        questionId = data.ques.id;
		$("#QuestionShow").attr("data-question", data.ques.id);
    },
    error: function(err){

    }
    
});

$("#submitNo, #submitYes").on("click", function() {
    $.ajax({
        url: "/answer",
        type: "POST",
        data: {
            questionId: $("#QuestionShow").attr("data-question"),
            vote: $(this).attr("id")
        },
        success: function(data) {
            window.location.href = "/randomquestion/api/" + data.ques.id;
        },
        error: function(err) {
        }
    });
});

$("#submitTotalVote").on("click", function() {
    $.ajax({
        url: "/totalvote",
        type: "POST",
        data: {
            questionId: $("#QuestionShow").attr("data-question")
        },
        success: function(data) {
            console.log(data);
            window.location.href = "/randomquestion/api/" + data.ques.id;
        },
        error: function(err){

        }
    });
});

$("#submitNewQuestion").on("click", function() {
    $.ajax({
        url: "/randomquestion",
        type: "GET",
        data: {},
        success: function(data) {
            window.location.href = "/randomquestion";
        },
        error: function(err){
            
        }
    })
});
