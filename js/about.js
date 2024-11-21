//  ==================== DOM =============================  
    let subscribe = document.querySelector('.subscribe')
    let Subscribed = document.querySelector('.Subscribed')
    let input = document.querySelector(".main_input")
    let button = document.querySelector(".mainButton")
    let menuBar = document.querySelector('.menu-bar')
    let respon = document.querySelector('.respon')


// ===================== Function ========================

let clickSubscribe = ()=>{
    subscribe.style = 'display:none'
    Subscribed.style = 'display:block; box-shadow: none'
}
let SubscribedFun = ()=>{
    Subscribed.style = 'display:none'
    subscribe.style = 'display:block'
}
button.addEventListener("click", ()=>{
    input.value = ""
})
// ===================   =====================
menuBar.addEventListener("click", ()=>{
    respon.classList.toggle("active");
    console.log("ok")
})







