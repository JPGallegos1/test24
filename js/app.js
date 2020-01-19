const btnDark = document.querySelector('#dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDark.classList.toggle('active');
});

const html = document.querySelector("html");
const nav = document.querySelector(".navigation");
const hamburguerMenu = document.querySelector(".hamburguer-menu");

const navigationIsOpen = () => html.classList.contains("nav-is-open");

const openNav = () => {
    html.classList.add("nav-is-open");
}

const closeNav = () => {
    html.classList.remove("nav-is-open");
}

const toggleNav = () => {
    navigationIsOpen() ? closeNav() : openNav();
}

hamburguerMenu.addEventListener('click', () => {
    toggleNav();
})