clickboardInput.onclick = () => {
    navigator.clipboard.writeText('play.polithorizon.ru');
    succesMessage.classList.add('active');
    setTimeout(() => succesMessage.classList.remove('active'), 3000);
}