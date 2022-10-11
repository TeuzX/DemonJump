const homem = document.querySelector('.homem')
const alien = document.querySelector('.alien')

const jump = () => {
    homem.classList.add('jump');

    setTimeout(() => {

        homem.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const alienPosition = alien.offsetLeft;
    const homemPosition = +window.getComputedStyle(homem).bottom.replace('px', '');

    if (alienPosition <= 60 && alienPosition > 0 && homemPosition < 100) {

        alien.style.animation = 'none';
        alien.style.left = `${alienPosition}px`;

        homem.style.animation = 'none';
        homem.style.bottom = `${homemPosition}px`;

        homem.src = './Imagens/morte.gif'
        homem.style.width = '120px'
        homem.style.marginLeft = '50px'

        clearInterval(loop);
        
    }

}, 10);



document.addEventListener('keydown', jump)
