document.querySelector(".dropdown-arrow").addEventListener("click", function(e) {
    e.stopPropagation();
    document.querySelector(".dropdown-menu").classList.toggle("show");
    
})

document.addEventListener("click", function(e) {
    const dropArrow = document.querySelector(".dropdown-arrow");
    const dropMenu = document.querySelector(".dropdown-menu");

    if (!dropArrow.contains(e.target) && !dropMenu.contains(e.target)) {
        document.querySelector(".dropdown-menu").classList.remove("show");
    }
})


document.querySelector(".dropdown-trigger").addEventListener("click", function() {
    const arrow = document.querySelector(".dropdown-arrow");
    arrow.classList.toggle('rotated');
    const colorArrow = document.querySelector(".material-symbols-outlined")
    colorArrow.classList.toggle("active");
})

document.addEventListener("click", function(e) {
    const dropArrow = document.querySelector(".dropdown-arrow");
    const resetColor = document.querySelector(".material-symbols-outlined");
    if (!dropArrow.contains(e.target)){
        dropArrow.classList.remove("rotated")
        resetColor.classList.remove("active");
    }
})

document.querySelector(".menu-premium").addEventListener("mouseenter", () => {
    const dropMenu = document.querySelector(".dropdown-menu-premium");
    dropMenu.classList.toggle("show");
})


