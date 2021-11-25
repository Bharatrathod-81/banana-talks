var btnTranslate=document.querySelector("#btn-translate");
var txtIput=document.querySelector("#txt-input");
console.log(txtIput)
function clickHandker(){
    console.log("clicked")
    console.log("input",txtIput.value);
    
}
btnTranslate.addEventListener("click",clickHandker);