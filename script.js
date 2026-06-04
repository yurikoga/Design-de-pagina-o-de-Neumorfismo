const pageItems = document.querySelectorAll('.page-item');

pageItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove estado ativo e efeito pressionado de todos
        pageItems.forEach(i => {
            i.classList.remove('active', 'neu-pressed');
            i.classList.add('neu-raised');
        });

        // Adiciona ao item clicado
        item.classList.add('active', 'neu-pressed');
        item.classList.remove('neu-raised');
        
        console.log("Página selecionada:", item.getAttribute('data-page'));
    });
});

// Feedback visual nos botões Previous/Next ao clicar
const navButtons = document.querySelectorAll('.btn-nav');
navButtons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.classList.replace('neu-raised', 'neu-pressed');
    });
    btn.addEventListener('mouseup', () => {
        btn.classList.replace('neu-pressed', 'neu-raised');
    });
});
