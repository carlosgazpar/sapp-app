const scrollUp = document.getElementById('scroll-up')

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset
    if(scrollY < 300){
        scrollUp.style.display = 'none'
    } else {
        scrollUp.style.display = 'block'
    }
})

scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})