function treatmentLoad() {
    const isGitHubPages = window.location.hostname.endsWith("github.io");
    const repoSegment = isGitHubPages ? `/${window.location.pathname.split("/")[1]}` : "";
    const dataUrl = `${repoSegment}/backend/data/descriptions.json`;

    let treatmentList = [];
    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            treatmentList = Object.values(data).flatMap(plik => plik.part1);
            let treatmentDiv = document.querySelector(".main-treatment");
            treatmentList.forEach((treatment) => {
                //Utworzenie linka z parametrem
                const treatmentLink = document.createElement('a');
                treatmentLink.className = 'treatment-link';
                treatmentLink.href = `../pages/PickedTreatment.html?treatment=${encodeURIComponent(treatment)}`;

                //Utworzenie całego kontenera (item)
                const treatmentItem = document.createElement('div');
                treatmentItem.className = 'treatment-item';

                //Utworzenie kontenerów na zdjęcie i podpis
                const treatmentItemPhotoDiv = document.createElement('div')
                const treatmentItemTextDiv = document.createElement('div')
                treatmentItemPhotoDiv.className = 'treatment-item-photo-div';
                treatmentItemTextDiv.className = 'treatment-item-text-div';

                //Zdjęcie
                const treatmentItemPhoto = document.createElement('img');
                treatmentItemPhoto.className = 'treatment-item-photo';
                treatmentItemPhoto.src = `../backend/word_photos/${treatment}.jpg`;
                treatmentItemPhoto.alt = `${treatment}-photo`;
                treatmentItemPhotoDiv.appendChild(treatmentItemPhoto);
                treatmentItem.appendChild(treatmentItemPhotoDiv);

                //Podpis zdjęcia
                const treatmentItemText = document.createElement('p');
                treatmentItemText.className = 'treatment-item-text';
                treatmentItemText.innerHTML = treatment.toLowerCase().charAt(0).toUpperCase() + treatment.toLowerCase().slice(1);
                treatmentItemTextDiv.appendChild(treatmentItemText);
                treatmentItem.appendChild(treatmentItemTextDiv);

                treatmentLink.append(treatmentItem);
                treatmentDiv.appendChild(treatmentLink);

            });
        });
}
export default treatmentLoad;