window.onload = function () {
    const buttonToCatalog = document.querySelector('#toCatalog');

    buttonToCatalog.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = './main.html';
    })
}
