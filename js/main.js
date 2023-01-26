// Logic Toggle Menu in Header
let main_ul = document.querySelectorAll(".main_ul li a")
let arr_main_ul = Array.from(main_ul)
// Foreach For Add Active to main ul
arr_main_ul.forEach(e => {
    e.addEventListener("click", e => {
        main_ul.forEach(e => {
            e.classList.remove("active")
        })
        e.target.classList.add("active");
    })
})

// Add And Remove Class Active To Toggle Menu in (Media Query) 
toggle_menu = document.querySelector(".toggle-menu")
menu_ul_li = document.querySelectorAll(".header .main_ul li")
menu_ul_a = document.querySelectorAll(".header .main_ul li a")

toggle_menu.onclick = function (e) {
    e.target.classList.toggle("active");
}
// Remove Active when click on li (to Hidden toggle menu)
menu_ul_li.forEach(e => {
    e.onclick = function (ele) {
        toggle_menu.classList.remove("active")
    }
})

// Logic To Change Tobic in Section-why-us
let changeTopic = document.querySelectorAll(".change li");
let arr_changeTopic = Array.from(changeTopic)
let taps = document.querySelectorAll(".tabs-content")
let arr_taps = Array.from(taps)

arr_changeTopic.forEach(item => {

    item.addEventListener("click", function (e) {
        // Foreach For Remove Class Active (li)
        changeTopic.forEach(e => {
            e.classList.remove("active")
        })
        // To Add Class Active
        e.target.classList.add("active");

        // ForEach For Show Content
        arr_taps.forEach(ele => {
            ele.classList.remove("active")
            document.querySelector(e.currentTarget.dataset.cont).classList.add("active")
        })
    })
})


// Start Logic Section Timer 

// Hints {(1- Count Data) (2- 1000 Milliseconds = 1 Second) (3- New Data)}
let newData = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    // Data Now
    let dataNow = new Date().getTime();
    // Find The Data Difference Between Now And New Data 
    let dataDiff = newData - dataNow
    // Get Time Unite
    let days = Math.floor(dataDiff / 1000 / 60 / 60 / 24)
    let hours = Math.floor(dataDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(dataDiff % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(dataDiff % (1000 * 60) / 1000)
    // Add To HTML
    document.querySelector("#days").innerHTML = days < 10 ? `0${days}` : days
    document.querySelector("#hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector("#minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector("#seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds
    if (dataDiff < 0) {
        clearInterval(counter)
        document.querySelector("#days").innerHTML = 0
        document.querySelector("#hours").innerHTML = 0
        document.querySelector("#minutes").innerHTML = 0
        document.querySelector("#seconds").innerHTML = 0
        let timeContainer = document.querySelector(".section-time .time")
        let pTime = document.createElement("p")
        let text = document.createTextNode("The Offer End, Comming Soon")
        pTime.appendChild(text)
        timeContainer.appendChild(pTime)

        // Css for New paragraphe When Time End
        pTime.style.cssText = "color:var(--main-color); margin-top:30px ; text-align:center;font-size:20px"
    }
}, 1000)


// Start Logic Section Courses
let child_bollet = document.querySelectorAll(".bollets .bollet")
let arr_child_bollet = Array.from(child_bollet)
let items = document.querySelectorAll(".items")
let arr_items = Array.from(items)

arr_child_bollet.forEach(e => {
    e.addEventListener("click", ele => {
        child_bollet.forEach(n => {
            n.classList.remove("active")
        })
        ele.target.classList.add("active")

        arr_items.forEach(r => {
            r.classList.remove("active")
            document.querySelector(ele.target.dataset.set).classList.add("active")
        })
    })
})

// Logic scroll top
let up = document.querySelector(".home .up");
window.onscroll = function () {
    if (scrollY > 1000) {
        up.classList.add("active")
    }
    scrollY >= 1150 ? up.classList.add("active") : up.classList.remove("active")
}
up.onclick = function () {
    window.scrollTo({ top: 0 })
}