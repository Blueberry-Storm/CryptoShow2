document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { title: 'Event 1', description: 'Discover the magic of New York with this exciting event.', city: 'New York', imgUrl: 'path-to-new-york.jpg' },
        { title: 'Event 2', description: 'Explore historical artifacts in the heart of London.', city: 'London', imgUrl: 'path-to-london.jpg' },
        { title: 'Event 3', description: 'Experience the vibrant culture of Tokyo with our exclusive tour.', city: 'Tokyo', imgUrl: 'path-to-tokyo.jpg' }
    ];

    const gridContainer = document.querySelector('.grid');
    const modal = document.getElementById('eventModal');
    const modalTitle = modal.querySelector('.modal-content h2');
    const modalDescription = modal.querySelector('.modal-content p');

    function createEventCards() {
        events.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <img src="${event.imgUrl}" alt="Event in ${event.city}" style="width:100%; height:200px; object-fit: cover;">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <button class="button-view">View</button>
            `;
            gridContainer.appendChild(card);
        });
    }

    function initializeModal() {
        gridContainer.addEventListener('click', function(e) {
            if (e.target.className === 'button-view') {
                const card = e.target.parentNode;
                modalTitle.textContent = card.querySelector('h3').textContent;
                modalDescription.textContent = card.querySelector('p').textContent;
                modal.style.display = 'block';
            }
        });

        modal.querySelector('.close').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    createEventCards();
    initializeModal();
});
