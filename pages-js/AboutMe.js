import Headbar from "../modules/headbar.js";

function AboutMe() {

    const headbar = Headbar();
    document.body.innerHTML = `
        <div>
            ${headbar}
            <div class="test">O mnie</div>
        </div>
    `

}

export default AboutMe;