(function windowLoading() {
    window.addEventListener("scroll", () => {
        const scrolling = window.scrollY;
        if(scrolling > 200) {
            const navBar = document.querySelector(".nav");
            navBar.classList.add("toUp");
            const fromRight = document.querySelector(".toTop");
            fromRight.classList.add("fromRight")
        }
        if(scrolling === 0) {
            const navBar = document.querySelector(".nav");
            navBar.classList.remove("toUp")
            navBar.classList.remove("toDown")
            const fromRight = document.querySelector(".toTop");
            fromRight.classList.remove("fromRight")
        }
        if(scrolling > 500) {
            const navBar = document.querySelector(".nav");
            navBar.classList.remove("toUp")
            navBar.classList.add("toDown")
        }
        if(scrolling < 500) {
            const navBar = document.querySelector(".nav");
            navBar.classList.remove("toDown")
        }
    })
})()
// This event is for To-top button
let button = document.querySelector(".toTopBtn");
button.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})
// window.addEventListener("load", (e) => {
//     e.preventDefault();
//     windowLoading()
// })