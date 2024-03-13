document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the server (you can replace this with actual data from a database)
    fetch('get_portfolio_data.php')
        .then(response => response.json())
        .then(data => {
            // Populate the gallery with dynamic content
            const gallery = document.getElementById('gallery');
            data.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-4';

                const card = document.createElement('div');
                card.className = 'card mb-4 box-shadow';

                const img = document.createElement('img');
                img.className = 'card-img-top';
                img.src = item.image;
                img.alt = item.caption;

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const caption = document.createElement('p');
                caption.className = 'card-text';
                caption.textContent = item.caption;

                cardBody.appendChild(caption);
                card.appendChild(img);
                card.appendChild(cardBody);
                col.appendChild(card);
                gallery.appendChild(col);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
