document.getElementById("textareaaa").addEventListener("input", function(){
    var maxlength = this.getAttribute("maxlength");
    let xChar = maxlength - document.getElementById("textareaaa").value.length;
    document.getElementById("pLenght").innerText = xChar;
});