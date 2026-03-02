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

    const treatmentProsContainer = document.querySelector(".treatment-pros-div");
    const part4Div = document.createElement('p');
    part4Div.innerHTML = `${data.part4.join('<br>')}`;
    part4Div.className = "treatment-pros-text";
    treatmentProsContainer.appendChild(part4Div);

    const treatmentConsContainer = document.querySelector(".treatment-cons-div");
    const part5Div = document.createElement('p');
    part5Div.innerHTML = `${data.part5.join('<br>')}`;
    part5Div.className = "treatment-cons-text";
    treatmentConsContainer.appendChild(part5Div);

    let part6Div = null;
    if (data.part6 && data.part6.length > 0) {
        const part6ContainerDiv = document.createElement('div');
        part6ContainerDiv.className = 'treatment-pros-cons-div';

        const part6Title = document.createElement('p');
        part6Title.className = 'treatment-pros-cons-title';
        part6Title.style.gridColumn = '1 / -1';
        part6Title.textContent = data.part6[0].replace(/:$/, '').toUpperCase();
        part6ContainerDiv.appendChild(part6Title);

        const part6InnerDiv = document.createElement('div');
        part6InnerDiv.className = 'treatment-cons-div treatment-tips-div';

        part6Div = document.createElement('p');
        part6Div.innerHTML = data.part6.slice(1).join('<br>');
        part6Div.className = 'treatment-cons-text';
        part6InnerDiv.appendChild(part6Div);
        part6ContainerDiv.appendChild(part6InnerDiv);

        const proConsDiv = document.querySelector('.treatment-pros-cons-div');
        proConsDiv.insertAdjacentElement('afterend', part6ContainerDiv);
    }

    const animatedElements = [
        part2Div,
        firstPhotoContainer,
        part3Div,
        part4Div,
        part5Div,
        ...(part6Div ? [part6Div] : []),
    ];

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
    });

    // secondPhotoContainer ma w CSS transform: translateY(-50%) - osobna animacja
    secondPhotoContainer.style.opacity = '0';
    secondPhotoContainer.style.transform = 'translateY(calc(-50% + 60px))';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const isAbsolute = entry.target === secondPhotoContainer;
                entry.target.style.animationDelay = `${i * 0.12}s`;
                entry.target.classList.add(isAbsolute ? 'slide-in-pt-absolute' : 'slide-in-pt');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('slide-in-pt', 'slide-in-pt-absolute');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = '';
                    entry.target.style.animationDelay = '';
                }, { once: true });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    animatedElements.forEach(el => observer.observe(el));
    observer.observe(secondPhotoContainer);
}

export default PickedTreatmentLoad;