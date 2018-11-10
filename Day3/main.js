const axios = require('axios');

axios.get('https://btvn-web16s.herokuapp.com/api/web16').then(function(res){
    let temp00;
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        console.log(template00);
    }).catch(function(err){
        console.log(err);
    });