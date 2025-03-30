document.addEventListener('DOMContentLoaded', () => {
    function filterItems() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.image-item').forEach(item => {
            const label = item.dataset.label.toLowerCase();
            item.style.display = label.includes(searchInput) ? '' : 'none';
        });
    }

    document.getElementById('search').addEventListener('input', filterItems);
});