
import validator from './validator.js';

inicializar()

function inicializar (){
    const btnShopp= document.querySelector("#btn-shopp");
    btnShopp.addEventListener("click", btnShoppClick)


    const closeLink= document.querySelector("#btn-modal")
    closeLink.addEventListener("click",modalClose)
}

function btnShoppClick(){
    const btnAbrir= document.querySelector(".bed-sheet");
    btnAbrir.classList.add("show-bed-sheet")
}
function modalClose(){
    const bedSheet= document.querySelector(".show-bed-sheet");
    bedSheet.classList.remove("show-bed-sheet")
}

console.log(validator.isValid("76757"));
console.log(validator.maskify("7675777777"));