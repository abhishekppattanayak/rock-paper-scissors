document.querySelector('footer').textContent = `© ${new Date().getFullYear()} malginisus`;
const p = document.getElementById('result');
let player=0, computer=0;
function replaceClass() {
    let main = document.getElementById('main');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth <= 516) {
        main.classList.add('flex-col-rev');
        left.classList.remove('flex-col');
        right.classList.remove('flex-col');
    } else {
        main.classList.remove('flex-col-rev');
        left.classList.add('flex-col');
        right.classList.add('flex-col');
    }
}
window.addEventListener('resize', replaceClass);
replaceClass();

let updateScore = () => {
    document.querySelector('span').textContent = `${player} - ${computer}`;
}
updateScore();

let findWinner = () => {
    let val = document.querySelector('input[name="choice"]:checked');
    if(val) {
        val = val.value;
        let comp = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

        let img = document.createElement('img');
        let img2 = document.createElement('img');

        img2.src = `./images/${val}.png`;
        img2.width = '50%';
        img.src = `./images/${comp}.png`;
        img.width = '50%';

        document.getElementById('one').innerHTML = '';
        document.getElementById('one').appendChild(img2);
        
        document.getElementById('two').innerHTML = '';
        document.getElementById('two').appendChild(img);

        let one = document.getElementById('one');
        let two = document.getElementById('two');

        if(val===comp){
            p.textContent = "It's a tie!";
            one.classList.add('neutral');
            one.classList.remove('winner');
            two.classList.remove('winner');
            two.classList.add('neutral');
        }
        else if((val==='rock' && comp==='scissors') || (val==='paper' && comp==='rock') || (val==='scissors' && comp==='paper')){
            p.textContent = "You win!";
            ++player;
            updateScore();
            one.classList.add('winner');
            one.classList.remove('neutral');
            two.classList.remove('winner');
            two.classList.add('neutral');
        }
        else {
            p.textContent = "You lose!";
            ++computer;
            updateScore();
            two.classList.add('winner');
            two.classList.remove('neutral');
            one.classList.add('neutral');
            one.classList.remove('winner');
        }
    }
}

