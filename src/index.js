
import validator from './validator.js';

inicializar()

function inicializar (){
    const btnShopp= document.querySelector("#btn-shopp");
    btnShopp.addEventListener("click", btnShoppClick)

    const closeLink= document.querySelector("#btn-modal");
    closeLink.addEventListener("click",modalClose);

    const form = document.querySelector("#form");
    form.addEventListener("submit", sendForm);

}

function btnShoppClick(){
    const btnAbrir= document.querySelector(".bed-sheet");
    btnAbrir.classList.add("show-bed-sheet")
}
function modalClose() {
    const closeLink=document.querySelector(".show-bed-sheet");
    closeLink.classList.remove("show-bed-sheet")
}

 function refresh(event){
     window.location.reload();
 }
function cleanMessage(){
    const cleanForm=document.querySelector(".show");
    cleanForm.classList.remove("show")
}

function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    const wrapMessage = document.querySelector(".wrap-message-error");
    wrapMessage.classList.remove("show");

    if ( validator.isValid(formData.get("ccar-number")) ) {
        const modal = document.querySelector(".modal");
        modal.innerHTML = `Felicitaciones ${formData.get("name-user")} compraste tu ticket con la tarjeta ${ validator.maskify(formData.get("ccar-number"))} !!
        <div class="container-btn">
        <button class="re-start btn-shopp-pay"> Aceptar </button>
        </div>`;
        const rFresh= document.querySelector(".re-start");
        rFresh.addEventListener("click",refresh)
       
    } else { 
        wrapMessage.classList.add("show");
        wrapMessage.querySelector(".message").textContent = "Tu tarjeta es inválida";
        const cleanInvalid = document.querySelector(".clean");
        cleanInvalid.addEventListener("click",cleanMessage)


    }

}

