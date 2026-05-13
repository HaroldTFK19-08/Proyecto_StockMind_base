const botones = document.querySelectorAll('.ver-btn');
const ambientes = document.getElementById('ambientes');
const inventario = document.getElementById('inventario');
const volverBtn = document.getElementById('volver');



botones.forEach((btn) => {
    btn.addEventListener('click', () => {
        ambientes.style.display = 'none';
        inventario.style.display = 'block';
    });
});
volverBtn.addEventListener('click', () => {
    inventario.style.display = 'none';
    ambientes.style.display = 'block';
});





const modal = document.getElementById("miModal");
const btnOpen = document.querySelectorAll(".btns");
const btnClose = document.querySelector(".close-btn");



btnOpen.forEach(btn => {
    btn.addEventListener("click", () => {
        const nombre = btn.getAttribute("nombre-ambiente");
        modal.style.display = "flex";
    });
});

btnClose.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

