/**
 * Alterna a visualização entre ícone e descrição nos cards de tecnologia
 * @param {HTMLElement} element - O elemento do card clicado
 */
function toggleCard(element) {
    // Seleciona todos os cards de tecnologia
    const todosOsCards = document.querySelectorAll('.card-tech');

    // Fecha os outros cards que estiverem abertos
    todosOsCards.forEach(card => {
        if (card !== element) {
            card.classList.remove('active');
        }
    });

    // Ativa ou desativa o card atual
    element.classList.toggle('active');
}