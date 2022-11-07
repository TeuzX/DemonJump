const Tanjiro = document.querySelector('.Tanjiro');
const obstaculo = document.querySelector('.obstaculo');
const score = document.querySelector('.score');
const highscoreElement = document.querySelector('.Highscore');
let count = 0;
let highscore = localStorage.getItem('Highscore:');
highscoreElement.innerHTML = `Highscore: ${highscore}`;


/* PÁGINA INICIAL */

const charOption = document.querySelectorAll('.choose-character .char');
let charSrc;

function charChoose(id) {
    charOption[id].addEventListener('click', () => {
        for(i = 0; i < 3; i++) {
            charOption[i].style.border = 'none';
        }
        charOption[id].style.border = '3px solid #fff';

        if(id == 0) {
            charSrc = 'Imagens/Tanjiro.gif';
        } else if(id == 1) {
            charSrc = 'Imagens/Zenitsu.gif';
        } else if(id == 2) {
            charSrc = 'Imagens/Nezuko.gif';
        }
        localStorage.setItem('charSrc', charSrc);
    });
}

for(i = 0; i < 3; i++) {
    charChoose(i);
}


Tanjiro.setAttribute('src', localStorage.getItem('charSrc'));

const jump = () => {
    Tanjiro.classList.add('jump');

    setTimeout(() => {

        Tanjiro.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft;
    const TanjiroPosition = +window.getComputedStyle(Tanjiro).bottom.replace('px', '');

    if (obstaculoPosition <= 60 && obstaculoPosition > 0 && TanjiroPosition < 100) {

        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        Tanjiro.style.animation = 'none';
        Tanjiro.style.bottom = `${TanjiroPosition}px`;

        Tanjiro.src = './Imagens/morte.gif';
        Tanjiro.style.zIndex = '999';
        Tanjiro.style.width = '170px';
        Tanjiro.style.marginLeft = '50px';

        document.querySelector('.opacity').style.display = 'flex';

        clearInterval(loop);
        clearInterval(scored);
    }

}, 10);


const scored = setInterval(( )=> {
    count++;
    score.innerHTML = `Score: ${count}`;
    if(count > highscore) {
        highscore = count;
        highscoreElement.innerHTML = `Highscore: ${highscore}`;
        localStorage.setItem('Highscore:', highscore);
    }

}, 150);


document.addEventListener('keydown', jump);
