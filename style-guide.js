document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);

    const items = document.querySelectorAll('.square');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const color = window.getComputedStyle(item).backgroundColor;
            tooltip.textContent = color;
            tooltip.style.display = 'block';

            // Posicionar el recuadro flotante cerca del div
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
        });

        item.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});