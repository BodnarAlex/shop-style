console.log('work');
window.onload = function () {
    const buttonToForm = document.querySelector('.logout');

    buttonToForm.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './index.html';
    })
}
