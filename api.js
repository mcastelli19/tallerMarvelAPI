const marvel = {
    render: () => {
        const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ee7675434b400ba7fe8f721aab8cc56e&hash=514b0d2419684b89ec6e218c9ccce6e1';
        const container = document.querySelector('#marvel-row');
        let htmlContent = '';

        fetch(URL)
            .then((response) => response.json())
            .then((json) => {
                console.log(json, 'RESPONSE.JSON')
                for (const characters of json.data.results) {
                    let urlCharacters = characters.urls[0].url;
                    htmlContent +=`
                    <div class="col-md-4">
                        <a href="${urlCharacters}" target="_blank"><img src="${characters.thumbnail.path}.${characters.thumbnail.extension}" alt="${characters.name}.${characters.events.available}.${characters.series.available}.${characters.stories.available}" class="img-thumbnail"></a>
                        <h3 class="title">${characters.name}</h3>
                        <p class="description">Events: ${characters.events.available}</p>
                        <p class="description">Series: ${characters.series.available}</p>
                        <p class="description">Stories: ${characters.stories.available}</p>
                    </div> `;
                }
                container.innerHTML = htmlContent;
            })
    }
};

marvel.render();
