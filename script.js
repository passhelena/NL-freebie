// set variables to the navbar1, navbar2 and both navbars
const navbar1 = document.querySelector("#nav1");
const navbar2 = document.querySelector("#nav2");
const navbars = document.querySelector("nav")

// everytime the user scrolls, the window checks if the navbar1    // exists - aka render is complete
window.onscroll = function() {
    if (navbar1) {
        renderIndexHTMLNav()
    } else {
        renderStickyNavBar(navbar2)
    }
};
/////////////////////////////////////////////////////////////////
// checks if window's y coordinate surpasses either navbar's offset // from top - aka past the navbar, make sure navbars are sticky.
// If goes back to the top of the page, remove sticky.
function renderStickyNavBar(navbar2, navbar1) {
    if (window.pageYOffset >= navbars.offsetTop) {
        navbar2.classList.add("sticky");
        navbar1.classList.add("sticky");
    } else {
        navbar2.classList.remove("sticky");
        navbar1.classList.remove("sticky");
    }
}
/////////////////////////////////////////////////////////////////
// runs the renderStickyNavBar to make sure either navbars are     // sticky
function renderIndexHTMLNav() {
    renderStickyNavBar(navbar2, navbar1);


    // set mainbottom to determine coordinate of #about-page1 (grey div // after navbar) 
    var mainbottom = $("#aboutpage-1").offset().top + $("#aboutpage-1").height();
    $(window).on('scroll', function() {

        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());

        if (stop > mainbottom) {
            navbar1.classList.add("hidden");
            navbar2.classList.remove("hidden");
        } else {
            navbar2.classList.add("hidden");
            navbar1.classList.remove("hidden");
        }
    });