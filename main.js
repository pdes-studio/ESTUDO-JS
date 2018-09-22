// https://developer.mozilla.org/pt-BR/docs/Web/API/Fullscreen_API
function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }


function teclaAtalho(){
const small = window.matchMedia('(max-width: 768px)').matches;
const elem = document.documentElement;

console.log(small);

if (small === false) {


function teclaAtalho(event){
    event.preventDefault();
    if(event.key === 't'){
        elem.classList.toggle('active');
    } 
}

window.addEventListener('keydown', teclaAtalho);

}

}

teclaAtalho();
  // Esta funcionalidade pode gerar um bug, pois se a pessoa aperta ESC ou F11 não consegui encontrar uma forma de setar para classList.toggle('slide');

const menuLink = document.querySelectorAll('.nav-menu a[href^="#"');
const secLink = document.querySelectorAll('.js .slide-section');

function linkInterno(){

    if(menuLink.length === secLink.length){
        menuLink[0].classList.add('active');
        secLink[0].classList.add('active');

    function clickLink(index){
        const linkHref = event.currentTarget.getAttribute('href');
        const section = document.querySelector(linkHref);

        menuLink.forEach( (item) => {
            item.classList.remove('active');
        });
        secLink.forEach( (link) => {
            link.classList.remove('active');
        });
        secLink[index].classList.add('active');
        menuLink[index].classList.add('active');
    }

        menuLink.forEach( (item, index) => {
            item.addEventListener('click', () => {
            clickLink(index);
            });
    });

}

}

linkInterno();


function menuMobile(){
    const small = window.matchMedia('(max-width: 768px)').matches;

    if(small === true){
    const menuBtnSec = document.querySelector('.btn-menu');
    const menuBtn = document.querySelector('.btn-menu a');
    const menuSec = document.querySelector('.nav-menu');

    function touchMenu(event){
        event.preventDefault();
      menuBtn.classList.toggle('active')
      menuSec.classList.toggle('mobile');
    }

    menuBtnSec.addEventListener('click', touchMenu);
}

}

menuMobile();

