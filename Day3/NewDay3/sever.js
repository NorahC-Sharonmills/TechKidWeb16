const express = require("express");
const axios = require("axios");
const app = express();

app.listen(6969, (err) => {
    if(err) console.log(err);
    else console.log("Sever Start");
});

app.get("/:classname", (req, res) => {
    const {classname} = req.params;
    axios({
        method: 'GET',
        url: `https://btvn-web16s.herokuapp.com/api/${classname}`,
    }).then(( {data}) => {
        const {students} = data;
        // let studentHTML = "";
        // students.forEach(element => {
        //     // studentHTML += "<li>" + element + "</li>";
        //     studentHTML += `<li>${element}</li>`;
        // });
        // // res.send("<ol>" + studentHTML + "</ol>");
        const studentHTML = students.map((students) => {
            return `<li>${students}</li>`;
        });
        res.send(`<ol>${studentHTML.join("")}</ol>`); //.join("") loại bỏ đấu "," giữa các dòng.
    });
});

app.get("/", (req, res) => {
    const {classname} = req.query;
    axios({
        method: 'GET',
        url: `https://btvn-web16s.herokuapp.com/api/${classname}`,
    }).then(( {data}) => {
        const {students} = data;
        // let studentHTML = "";
        // students.forEach(element => {
        //     // studentHTML += "<li>" + element + "</li>";
        //     studentHTML += `<li>${element}</li>`;
        // });
        // // res.send("<ol>" + studentHTML + "</ol>");
        const studentHTML = students.map((students) => {
            return `<li>${students}</li>`;
        });
        res.send(`<ol>${studentHTML.join("")}</ol>`); //.join("") loại bỏ đấu "," giữa các dòng.
    });
});