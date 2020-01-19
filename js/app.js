const btnDark = document.querySelector('#dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDark.classList.toggle('active');
});
