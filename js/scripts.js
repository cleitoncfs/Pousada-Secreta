document.addEventListener('DOMContentLoaded', () => {
    const menuSanduiche = document.querySelector('.menu-sanduiche');
    const containerLinks = document.querySelector('.container-links');
    
    menuSanduiche.addEventListener('click', () => {
        containerLinks.classList.toggle('active');
        menuSanduiche.classList.toggle('open');
    });

    // Fecha o menu ao clicar em um link
    const links = document.querySelectorAll('.container-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            containerLinks.classList.remove('active');
            menuSanduiche.classList.remove('open');
        });
    });
});
