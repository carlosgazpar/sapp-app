window.addEventListener('load', () => {
    const dots = document.getElementById('dots')
    dots.classList.add('dots-hide')

    const sectionLeft = document.querySelector('.section-left')
    sectionLeft.classList.add('section-left-hide')

    const sectionRight = document.querySelector('.section-right')
    sectionRight.classList.add('section-right-hide')

    const loaderWrapper = document.querySelector('.preloader-wrapper')

    setTimeout( () =>{
        loaderWrapper.remove()
    }, 1000)

})