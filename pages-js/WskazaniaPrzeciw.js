import Headbar from "../modules/headbar.js";

function WskazaniaPrzeciw() {
    const headbar = Headbar();
    document.body.innerHTML = `
        <div>
            ${headbar}
            <div class="test">Wskazania i przeciwwskazania</div>
        </div>
    `
}
export default WskazaniaPrzeciw;