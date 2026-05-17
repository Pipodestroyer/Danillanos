const icon = document.getElementById('themechange')
const mobiletheme = document.getElementById('mobile-themechange')
const hamburger = document.getElementById('mobile-dropdown')
const menu = document.getElementById('dropdown')
const overlay = document.getElementById('overlay')
const closebtn = document.getElementById('close')
const hamburgerbtn = document.getElementById('hamburger')
let darkmode = localStorage.getItem('darkmode')
let isout = localStorage.getItem('dropdown')

const enableDarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

icon.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
mobiletheme.addEventListener("click", () =>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const enableDrop = () => {
    document.body.classList.add('out')
    menu.classList.add('out')
    overlay.classList.add('out')
    closebtn.classList.add('out')
    hamburgerbtn.classList.add('out')
    localStorage.setItem('dropdown', 'active')
}

const disableDrop = () => {
    document.body.classList.remove('out')
    menu.classList.remove('out')
    overlay.classList.remove('out')
    closebtn.classList.remove('out')
    hamburgerbtn.classList.remove('out')
    localStorage.setItem('dropdown', null)
}

hamburger.addEventListener("click", () =>{
    isout = localStorage.getItem('dropdown')
    isout !== "active" ? enableDrop() : disableDrop()
})

overlay.addEventListener("click", () =>{
    isout = localStorage.getItem('dropdown')
    isout !== "active" ? enableDrop() : disableDrop()
})