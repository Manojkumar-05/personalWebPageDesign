const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul')
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header .container')

hamburger.addEventListener( 'click', () =>{
    hamburger.classList.toggle('active')
    mobileMenu .classList.toggle('active')
})

window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
})

menuItem.forEach( item => {
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active')
        mobileMenu .classList.toggle('active')
    })
}
)