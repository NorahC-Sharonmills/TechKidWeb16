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
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    var xRandom = Math.floor(Math.random() * ques.length);
    // res.send(ques[xRandom].content);
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Trả lời em êiii</title>
    </head>
    <body>
        <p id="QuestionShow">${ques[xRandom].content}</p>
        <button type="submit" id="submitYes">Có</button>
        <button type="submit" id="submitNo">Không</button>
    
        <script src="/randomQuestion.js"></script>
    </body>
    </html>`);
});

app.post("/randomquestion", (req, res) => {
    console.log("A");
    res.redirect("/");
});

app.get("/randomquestion/:id", (req, res) => {
    const {id} = req.params;
    const ques = JSON.parse(fs.readFileSync('./saveQuestion/question.json', 'utf-8'));
    console.log(ques.length);
    if(id >= 6) {res.send(`Nhập câu hỏi!`);}
    else {res.send(`${ques[`${id}`].content}`);}

});

app.listen(1234, (err) => {
    if(!err) console.log("Success!");
});