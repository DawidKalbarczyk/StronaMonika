function PickedTreatmentLoad() {
    // Pobranie parametru z URL
    const urlParams = new URLSearchParams(window.location.search);
    const treatment = urlParams.get('treatment');

    console.log('Wybrany zabieg:', treatment);

    if (treatment) {
        loadTreatmentData(treatment);
    } else {
        console.error('Brak parametru treatment w URL');
    }
}

function loadTreatmentData(treatment) {
    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/descriptions.json`;

    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            let foundData = null;

            for (const [fileName, fileData] of Object.entries(data)) {
                if (fileData.part1 && fileData.part1.includes(treatment)) {
                    foundData = fileData;
                    break;
                }
            }

            if (foundData) {
                console.log('Znalezione dane:', foundData);
                displayTreatment(foundData);
            } else {
                console.error('Nie znaleziono danych dla zabiegu:', treatment);
            }
        })
        .catch(error => {
            console.error('Błąd ładowania danych:', error);
        });
}

function displayTreatment(data) {
     // Div dla part1
    const part1Div = document.createElement('p');
    part1Div.className = 'main-content-info-title';
    part1Div.innerHTML = data.part1.map(item =>
        item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)
    ).join('<br>');
    const title = document.querySelector(".main-content-info-title-container");
    title.appendChild(part1Div);

    // Div dla part2
    const part2Div = document.createElement('p');
    part2Div.className = 'treatment-description-1st-text';
    part2Div.innerHTML = data.part2.join('<br>');
    const firstTextContainer = document.querySelector(".treatment-description-1st-text-container");
    firstTextContainer.appendChild(part2Div);
    const firstPhoto = document.createElement('img');
    firstPhoto.alt = `${data.part1.join('<br>')}-1st`;
    const photoName = data.part1[0]; // "HENNA RZĘS"
    firstPhoto.src = `../backend/word_photos/${photoName}.jpg`;
    firstPhoto.className = "treatment-description-1st-photo";
    const firstPhotoContainer = document.querySelector(".treatment-description-1st-photo-container");
    firstPhotoContainer.appendChild(firstPhoto);

    // Div dla part3
    const secondPhoto = document.createElement('img');
    secondPhoto.alt = `${data.part1.join('<br>')}-2nd`;
    secondPhoto.src = `../backend/word_photos/${photoName}.jpg`;
    secondPhoto.className = "treatment-description-2nd-photo";
    const secondPhotoContainer = document.querySelector(".treatment-description-2nd-photo-container");
    secondPhotoContainer.appendChild(secondPhoto);
    const part3Div = document.createElement('p');
    part3Div.className = 'treatment-description-2nd-text';
    part3Div.innerHTML = data.part3.join('<br>');
    const secondTextContainer = document.querySelector(".treatment-description-2nd-text-container");
    secondTextContainer.appendChild(part3Div);
}

export default PickedTreatmentLoad;