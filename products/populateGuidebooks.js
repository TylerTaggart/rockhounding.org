document.addEventListener('DOMContentLoaded', function() {
    const guidebooksContainer = document.getElementById('guidebooks-container');

    const states = {};

    guidebooks.forEach(guidebook => {
        guidebook.states.forEach(state => {
            if (!states[state]) {
                states[state] = [];
            }
            states[state].push(guidebook);
        });
    });

    for (const [state, books] of Object.entries(states)) {
        const stateSection = document.querySelector(`.books-container[data-state="${state}"]`);

        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('product-column');
            bookCard.innerHTML = `
                <p class="book-title">${book.title}</p>
                <div class="book-content">
                    <a href="${book.url}" target="_blank"><img src="../products/productImages/guidebooks/${book.image}.png" alt="${book.title}"></a>
                    <p class="book-description">${book.description}</p>
                </div>
                <a href="${book.url}" target="_blank" class="amazon-button">View on Amazon</a>
            `;
            stateSection.appendChild(bookCard);
        });
    }

    document.querySelectorAll('.state-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
