import Headbar from "../modules/headbar.js";

function Kontakt() {

    const headbar = Headbar();
    document.body.innerHTML = `
        <div>
            ${headbar}
            <div class="test">Kontakt</div>
        </div>
    `
}

export default Kontakt;