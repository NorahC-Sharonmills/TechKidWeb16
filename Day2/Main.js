// console.log("Duy Dep Try Vai Noiiiii");


// //Biến
// const a = 5; // biến không thay đổi được

// var b = 6; // biến var :))

// b = "Hello";

// let c = 8; 
// // Biến
// console.log(typeof c); //number in ra kiểu :)) 

// var obj = {
//     age: 5,
//     name: "Duy"
// }

// var _obj = {};

// _obj.age = 18;
// _obj.name = "DuyDepTry";
// _obj.adress = "HaNoi";

// console.log(_obj);
// console.log(_obj.name);
// console.log(_obj["name"]);

// var arr = [1, 2, 3, 4];
// console.log(arr);
// arr.push(5);
// console.log(arr);

// //Func

// function showName(stringA, intB){
//     console.log(stringA);
//     console.log(intB);
// }

// showName(_obj.name, _obj.age);

// // const showNameConst = function(aaa,bbb){
// //     console.log(aaa);
// //     console.log(bbb);
// // }

// // const showNameConstNew = (aaa,bbb) => {
// //     console.log(aaa);
// //     console.log(bbb);
// // }

// var number = 5.8888888888;
// number.toFixed(2);
// console.log(number);
// console.log(number.toFixed(2));
// console.log("aaaaaaaaaaaa".toUpperCase());
// console.log("AAAAAAAAAAAA".toLowerCase());

// let now = new Date();
// console.log(now);
// console.log(now.getDay()); // Thứ

//Func Scope

// var _newa = 5;

// function showNewA(){
//     var _newb = 6;
//     _newc = 7 // khai báo biến toàn cục

//     console.log(_newa);
//     console.log(_newb);
//     console.log(_newc);
// }

// showNewA();

// console.log(_newa);
// //console.log(_newb); //undefined
// console.log(window._newc);

function countDown(count){
    for(let i = count; i >= 0; i--){
        setTimeout(function(){
            console.log(i);
        }, (count - i) * 1000);
    }
}



//countDown(5);

//CallBack()

const goHome = (_done) => {
    setTimeout(function(){
        console.log("A");
        _done();
    }, 3000);
}

const Home = () => {
    setTimeout(function(){
        console.log("B");
    }, 3000);
}

goHome(() => Home());
