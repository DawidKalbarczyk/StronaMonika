function ExcelReader() {
    const container = document.createElement('div');

    fetch("../backend/data/cennik.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'price-item';
                itemDiv.innerHTML = `${item.NAZWA} - ${item.OPIS} - ${item.CENA} zł`
                container.appendChild(itemDiv);
            });
        });


    return container;
}

export default ExcelReader;