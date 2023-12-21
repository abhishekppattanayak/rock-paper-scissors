document.querySelector('footer').textContent = `© ${new Date().getFullYear()} malginisus`;
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