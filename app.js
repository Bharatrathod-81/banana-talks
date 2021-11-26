var btnTranslate=document.querySelector("#btn-translate");
var txtIput=document.querySelector("#txt-input");
var outPut=document.querySelector("#output");
console.log(txtIput)
function clickHandker(){
    outPut.innerText="ajajakaka "+txtIput.value;
}
btnTranslate.addEventListener("click",clickHandker);