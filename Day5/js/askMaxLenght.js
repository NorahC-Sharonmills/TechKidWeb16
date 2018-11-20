// document.getElementById("textareaaa").addEventListener("input", function(){
//     var maxlength = this.getAttribute("maxlength");
//     let xChar = maxlength - document.getElementById("textareaaa").value.length;
//     document.getElementById("pLenght").innerText = xChar;
// });
console.log("a");
$("#textareaaa").on("input", function(){
    var maxlength = this.getAttribute("maxlength");
    console.log("az");
    let xChar = maxlength - $("#textareaaa").val().length;
    $("#pLenght").text(xChar);
});