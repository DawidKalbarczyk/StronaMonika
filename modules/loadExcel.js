function ExcelReader() {
    const container = document.createElement('div');

    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/cennik.json`;

    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'price-item';
                itemDiv.innerHTML = `${item.NAZWA} - ${item.OPIS} - ${item.CENA} zł`
                container.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error("Failed to load cennik.json:", error);
        });


    return container;
}

export default ExcelReader;