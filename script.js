const rotateArticleContainerCounterClockwise = () => {
    const articleContainer = document.querySelector('.articleContainer')
    const nav = document.querySelector('nav')
    const navCloser = document.querySelector('.navCloser')
    articleContainer.classList.add('rotated')   
    nav.classList.add('visible')
    navCloser.classList.add('open')
    for (let child of nav.children) {
        child.classList.add('visible')
    }
    return
}

const rotateArticleContainerClockwise = () => {
    const articleContainer = document.querySelector('.articleContainer')
    const nav = document.querySelector('nav')
    const navCloser = document.querySelector('.navCloser')
    articleContainer.classList.remove('rotated')
    nav.classList.remove('visible')
    navCloser.classList.remove('open')
    for (let child of nav.children) {
        child.classList.remove('visible')
    }
    return
}