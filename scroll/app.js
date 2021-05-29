// set date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()
// close links
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height
    linksHeight = links.getBoundingClientRect().height
    // console.log(containerHeight)

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

// fixed navbar
window.addEventListener('scroll', function(){
    const scrollHeight = this.window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
        navbar.classList.add('fixex-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})

// const scrollLinks = document.