document.querySelectorAll(".menu-item span").forEach(item => {
    item.addEventListener("click", (event) => {
        // Cerrar todos los submenús antes de abrir uno nuevo
        document.querySelectorAll(".submenu").forEach(submenu => {
            submenu.style.display = "none";
        });

        // Abrir el submenú del botón clickeado
        let submenu = item.nextElementSibling;
        if (submenu) {
            submenu.style.display = "block";
        }

        // Evitar que el clic cierre inmediatamente el submenú
        event.stopPropagation();
    });
});

// Cierra los submenús si se hace clic fuera de ellos
document.addEventListener("click", () => {
    document.querySelectorAll(".submenu").forEach(submenu => {
        submenu.style.display = "none";
    });
});