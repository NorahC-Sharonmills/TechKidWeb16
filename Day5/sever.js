const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fs = require("fs");


app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('js'));

app.get("/askme", (req, res) =>{
    res.sendFile(__dirname + "/view/askme.html");
});

app.post("/askme", (req, res) =>{
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    let newQuestion = {
        id: ques.length,
        yes: 0,
        no: 0,
        content: req.body.textinpquestion,
    }
    let newQues = {
        stt: 0,
        newQuestion,
    }
    ques.push(newQuestion);
    fs.writeFileSync('./saveQuestion/question.json', JSON.stringify(ques));
    res.redirect("/randomquestion");
});

app.get("/randomquestion", (req, res) => {
    res.sendFile(__dirname + "/view/randomQuestion.html");
});

app.get("/randomquestion/api", (req, res) => {
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    var xRandom = Math.floor(Math.random() * ques.length);
    // res.send(ques[xRandom].content);
    res.json({ques: ques[xRandom]});
});

app.get("/randomquestion/:id", (req, res) => {
    const {id} = req.params;
    var option = {
        sendid: `${id}`
    };
    // res.send(`${id}`);
    res.sendFile(__dirname + "/view/totalvoteQuestion.html", option);
});

app.get("/randomquestion/api/:id", (req, res) => {
    const {id} = req.params;
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    // console.log(ques.length);
    if(id >= ques.length) {res.send(`Nhập câu hỏi!`);}
    else {res.json({ques: ques[`${id}`]});}

});

app.post("/answer", (req, res) => {
    const questionId = req.body.questionId;
    const vote = req.body.vote;
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    if(vote == "submitYes") ques[questionId].yes += 1;
    else ques[questionId].no += 1;
    fs.writeFileSync('./saveQuestion/question.json', JSON.stringify(ques));
    res.redirect("http://localhost:1234/randomquestion/api/" + questionId);
});

app.post("/totalvote", (req, res) => {
    const quesId = req.body.questionId;
    res.redirect("http://localhost:1234/randomquestion/api/" + quesId);
});

app.listen(1234, (err) => {
    if(!err) console.log("Success!");
});