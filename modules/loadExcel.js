function ExcelReader() {
    const container = document.createElement('div');
    container.className = 'item-main-container'


    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/cennik.json`;

    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            data.forEach(group => {
                const mainDiv = document.createElement('div');
                mainDiv.className = 'item-wrapper-div';

                // Nagłówek grupy (nazwa zabiegu)
                const groupHeader = document.createElement('div');
                groupHeader.className = 'item-group-header';
                groupHeader.textContent = group.ZABIEG;
                mainDiv.appendChild(groupHeader);


                // Wiersze grupy (czas, opis, cena)
                group.items.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'item-container';

                    const itemTime = document.createElement('div');
                    itemTime.className = 'item-props';
                    itemTime.innerHTML = `${item.CZASZABIEGU}`;
                    itemDiv.appendChild(itemTime);

                    const separator1 = document.createElement('div');
                    separator1.className = 'separator';
                    separator1.innerHTML = '|';
                    itemDiv.appendChild(separator1);

                    const itemDescription = document.createElement('div');
                    itemDescription.className = 'item-props';
                    itemDescription.innerHTML = `${item.OPIS}`;
                    itemDiv.appendChild(itemDescription);

                    const separator2 = document.createElement('div');
                    separator2.className = 'separator';
                    separator2.innerHTML = '|';
                    itemDiv.appendChild(separator2);

                    const itemPrice = document.createElement('div');
                    itemPrice.className = 'item-props';
                    itemPrice.innerHTML = `${item.CENA} zł`;
                    itemDiv.appendChild(itemPrice);

                    mainDiv.appendChild(itemDiv);

                });
                const itemSeparator = document.createElement('div');
                itemSeparator.className = "item-props-separator";
                container.appendChild(itemSeparator);
                container.appendChild(mainDiv)

            });

        })
        .catch(error => {
            console.error("Failed to load cennik.json:", error);
        });


    return container;
}

export default ExcelReader;