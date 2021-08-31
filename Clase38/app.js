window.addEventListener("load",(e)=>{
    this.alert("aaa");
    let homebtn = document.querySelector(".home-btn")
    homebtn.addEventListener("click",()=>{
        e.preventDefault();
    })
})


//solamente se hace la ultima declaración, las otras se "sobreescriben".
window.onload = function(){

}