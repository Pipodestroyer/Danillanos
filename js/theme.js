const icon = document.getElementById('themechange')
const mobiletheme = document.getElementById('mobile-themechange')
const hamburger = document.getElementById('mobile-dropdown')
const iscart = document.getElementById('shoppingbag')
const iscartmobile = document.getElementById('shoppingbag-mobile')
const thecartmenu = document.getElementById('global-shopping-cart')
const menu = document.getElementById('dropdown')
const overlay = document.getElementById('overlay')
const overlaycarro = document.getElementById('overlaycarrito')
const closecart = document.getElementById('closethecart')
const closebtn = document.getElementById('close')
const hamburgerbtn = document.getElementById('hamburger')
const header = document.getElementById('scroll-change')
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

const enableCart = () => {
    document.body.classList.add('out')
    thecartmenu.classList.add('out')
    overlaycarro.classList.add('out')
    localStorage.setItem('carrito', 'active')
}

const disableCart = () => {
    document.body.classList.remove('out')
    thecartmenu.classList.remove('out')
    overlaycarro.classList.remove('out')
    localStorage.setItem('carrito', null)
}

hamburger.addEventListener("click", () =>{
    isout = localStorage.getItem('dropdown')
    isout !== "active" ? enableDrop() : disableDrop()
})

overlay.addEventListener("click", () =>{
    isout = localStorage.getItem('dropdown')
    isout !== "active" ? enableDrop() : disableDrop()
})

iscart.addEventListener("click", () =>{
    cartout = localStorage.getItem('carrito')
    cartout !== "active" ? enableCart() : disableCart()
})

iscartmobile.addEventListener("click", () =>{
    cartout = localStorage.getItem('carrito')
    cartout !== "active" ? enableCart() : disableCart()
})

overlaycarro.addEventListener("click", () =>{
    isout = localStorage.getItem('carrito')
    isout !== "active" ? enableCart() : disableCart()
})

closecart.addEventListener("click", () =>{
    cartout = localStorage.getItem('carrito')
    cartout !== "active" ? enableCart() : disableCart()
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})