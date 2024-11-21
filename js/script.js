// ================= DOM PART ==================
    let Loading = document.querySelector('.Loading')
    let MainDiv = document.querySelector('.MainDiv')
    let subscribe = document.querySelector('.subscribe')
    let Subscribed = document.querySelector('.Subscribed')
    let sun = document.querySelector('.sun')
    let night = document.querySelector('.night')
    let body = document.querySelector('body')
    let menuRow = document.querySelector('.menuRow')
    let Footer = document.querySelector('Footer')
    let mainMenu = document.querySelector('.mainMenu')
    let logo = document.querySelector('.logo')
    let hm = document.querySelector('.hm')
    let hmm = document.querySelector('.hmm')
    let hmmm = document.querySelector('.hmmm')
    let hmmmm = document.querySelector('.hmmmm')
    let l1 = document.querySelector('.l11')
    let l2 = document.querySelector('.l22')
    let l3 = document.querySelector('.l33')
    let l4 = document.querySelector('.l44')
    let bannerP = document.querySelector('.bannerP')
    let wantMore = document.querySelector('.wantMore')
    let engage = document.querySelector('.engage')
    let follow = document.querySelector('.follow')
    let part1 = document.querySelector('.part1')
    let privacy = document.querySelector('.privacy')
    let site = document.querySelector('.site')
    let bannerh1 = document.querySelector('.bannerh1')
    let menuBar = document.querySelector('.menu-bar')
    let respon = document.querySelector('.respon')
     
// ============= Function Part ===============
 setTimeout(() => {
    Loading.style.display = 'none';
    MainDiv.style.display = 'block';
    
}, 5000);
//  ============ Subscribe button funtion ===========

let clickSubscribe = ()=>{
    subscribe.style = 'display:none'
    Subscribed.style = 'display:block'
}
let SubscribedFun = ()=>{
    Subscribed.style = 'display:none'
    subscribe.style = 'display:block'
}
// ===================== menubar ================
menuBar.addEventListener("click", ()=>{
    respon.classList.toggle("active");
})
// =============== sun change ==============
sun.addEventListener("click", ()=>{
    sun.style = "display: none"
    night.style = "display: block"
    body.style = "background: #EEEEEE"
    logo.style = "background:#000; border-radius: 6px;"
    mainMenu.style =  "box-shadow: none; background: #EEEEEE; border-bottom: thin solid #666666;"
    hm.style = "color: #000"
    hmm.style = "color: #000"
    hmmm.style = "color: #000"
    hmmmm.style = "color: #000"
    bannerP.style = "color: #000"
    wantMore.style = "color: #C62E2E"
    engage.style = "color: black"
    follow.style = "color: black"
    part1.style = "color: black"
    privacy.style = "color: black"
    site.style = "color: black"
    bannerh1.style = "color: #FF6500"
    Footer.style = "background: #EEEEEE"
    l1.addEventListener("mouseout", ()=>{
        hm.style.color = "black"
    })
    l2.addEventListener("mouseout", ()=>{
        hmm.style.color = "black"
    })
    l3.addEventListener("mouseout", ()=>{
        hmmm.style.color = "black"
    })
    l4.addEventListener("mouseout", ()=>{
        hmmmm.style.color = "black"
    })
})

// =============== night change ==============
night.addEventListener("click", ()=>{
    night.style = "display: none"
    sun.style = "display: block"
    body.style = "background: url(images/bggggggg.jpg);"
    mainMenu.style = "background: #00182a"
    logo.style = "background:none"
    hm.style = "color: #fff"
    hmm.style = "color: #fff"
    hmmm.style = "color: #fff"
    hmmmm.style = "color: #fff"
    bannerP.style = "color: #fff"
    wantMore.style = "color: yellow"
    engage.style = "color: white"
    follow.style = "color: yellow"
    part1.style = "color: white"
    privacy.style = "color: white"
    site.style = "color: white"
    bannerh1.style = "color: #00eaff"
    Footer.style = "background: #00182a"
    l1.addEventListener("mouseover", ()=>{
        hm.style.color = "black"
    })
    l1.addEventListener("mouseout", ()=>{
        hm.style.color = "white"
    })
    l2.addEventListener("mouseover", ()=>{
        hmm.style.color = "black"
    })
    l2.addEventListener("mouseout", ()=>{
        hmm.style.color = "white"
    })
    l3.addEventListener("mouseover", ()=>{
        hmmm.style.color = "black"
    })
    l3.addEventListener("mouseout", ()=>{
        hmmm.style.color = "white"
    })
    l4.addEventListener("mouseover", ()=>{
        hmmmm.style.color = "black"
    })
    l4.addEventListener("mouseout", ()=>{
        hmmmm.style.color = "white"
    })
})
// ------------------------------------------ X ----------------------------------------

