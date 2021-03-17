const navbar = document.getElementById('menufix')

// OnScroll event handler
const onScroll = () => {

    const scroll = document.documentElement.scrollTop

    // If scroll value is more than x - add class
    if (scroll > 10) {
        navbar.classList.add("stick");
    } else {
        navbar.classList.remove("stick")
    }
}

window.addEventListener('scroll', onScroll)