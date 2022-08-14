'use strict'
//selecting UI components
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const toggleMenu = ()=> {
    openMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden') 
    mobileMenu.classList.toggle('active')   
}

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)