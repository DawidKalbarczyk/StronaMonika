async function generatePhotosHTML(folderPath) {
    const response = await fetch('../backend/data/gallery.json');
    const imageNames = await response.json();

    const images = imageNames.map(name => `${folderPath}/${name}`);

    if (images.length < 4) {
        return `<p>Za mało zdjęć w folderze (potrzebne minimum 4)</p>`;
    }

    let html = '';
    let i = 0;

    while (i < images.length) {
        const remaining = images.length - i;

        if (remaining >= 4) {
            html += `
                <div class="photos-grid">
                    <div class="photo-simple">
                        <img src="${images[i]}" alt="photo" />
                    </div>
                    <div class="photo-center">
                        <img src="${images[i + 1]}" alt="photo" />
                        <img src="${images[i + 2]}" alt="photo" />
                    </div>
                    <div class="photo-simple">
                        <img src="${images[i + 3]}" alt="photo" />
                    </div>
                </div>
            `;
            i += 4;
        } else {
            html += `<div class="photo-simple">`;
            while (i < images.length) {
                html += `<img src="${images[i]}" alt="photo" />`;
                i++;
            }
            html += `</div>`;
        }
    }

    return html;
}

export default generatePhotosHTML;