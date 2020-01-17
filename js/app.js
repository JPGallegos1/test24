/* Fuction to fixed the header */

window.onscroll = () => {
    fixedHeader();
}

const header = document.querySelector('.header');
const fixed = header.offsetTop;

function fixedHeader(){
    if (window.pageYOffset > fixed) header.classList.add("fixed-header")
    else header.classList.remove("fixed-header")
};
