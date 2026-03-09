async function generatePhotosHTML(folderPath) {
    const response = await fetch('../backend/data/gallery.json');
    const imageNames = await response.json();

    const images = imageNames.map(name => `${folderPath}/${name}`);

    if (images.length < 1) {
        return `<p>Brak zdjęć w galerii</p>`;
    }

    return images.map(src => `<img class="gallery-photo" src="${src}" alt="zdjęcie z salonu" />`).join('');
}

export default generatePhotosHTML;