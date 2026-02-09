import Headbar from "../modules/headbar.js";

function Galeria() {
    const headbar = Headbar();
    document.body.innerHTML = `
        <div>
            ${headbar}
            <div class="test">Galeria</div>
        </div>
    `
}

export default Galeria;