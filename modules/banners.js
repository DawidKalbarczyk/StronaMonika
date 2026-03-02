function Banner() {
    const pathName = window.location.pathname;
    let path = ""
    if (pathName.endsWith("index.html") || pathName.endsWith("/")) {
        path = "backend/photos_compressed"
    } else {
        path = "../backend/photos_compressed"
    }

    const html = `
        <div class="facebook-pic-fixed-container">
            <img class="facebook-pic-fixed" src="${path}/saloonPhotos/1-fac.jpg" alt="1-fac"/>
        </div>
        <div class="facebook-pic-fixed-container fac-cont2">
            <img class="facebook-pic-fixed fac-pic2" src="${path}/treatmentPhotos/ai-generated-9400921_1280.jpg" alt="2-fac"/>
        </div>
    `;
    return html;
}
export default Banner;