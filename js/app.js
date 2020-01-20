/* Evento para mostrar dark mode */

const btnDark = document.querySelector("#dark-mode");

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnDark.classList.toggle("active");
});


/* Evento para mostrar menu lateral */
const nav = document.querySelector('.menu-wrap');


nav.addEventListener('click', (e) => {

    const menu = e.target.classList;

    const body = document.body,
          openMenu = document.querySelector('.fa-bars'),
          closeMenu = document.querySelector('.fa-times');
    
    if (menu.contains('fa-bars')) {
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
        body.classList.add('open-menu');

    } else if(menu.contains('fa-times')){
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
        body.classList.remove('open-menu');
    }
})

