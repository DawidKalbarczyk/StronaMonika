import Headbar from "../modules/headbar.js";

function Zabiegi() {
    const headbar= Headbar();
    document.body.innerHTML = `
        <div>
            ${headbar}
            <div class="test">Zabiegi</div>
        </div>
    `
}

export default Zabiegi;