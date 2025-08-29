const futr = `
    <div class="columns is-multiline has-text-centered">
        <div class="column is-two-fifths">
            <p class="title" style="font-size:1.5rem">MADE WITH HTML, CSS, JS AND <a href="https://bulma.io" class="my-a" target="_blank">BULMA</a>,<sup><i> no AI used</i></sup></p>
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column is-two-fifths">
            <p class="title" style="font-size:1.5rem">© 2025 Jakims page is licensed under <a class="my-a" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a></p>
        </div>
    </div>`;
document.getElementById('FOOTER').insertAdjacentHTML("beforeend",futr)


const hedr = `
<div class="hero-head has-text-centered" style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
    <a href="index.html"><p class="title has-text-centered" style="font-size: 5rem;"><u> Jakims </u></p></a>
    <img src="kyti.png" class="image is-96x96" style="margin-left: 1rem;">
</div>
<div style="display: flex; align-items: center; justify-content: right; flex-wrap: wrap; background-color:var(--mbg); padding:1rem;">
    <a class="title" onclick="SetTheme('light')"><div style="background-color: white; color:rgba(128, 128, 128, 1)">LIGHT</div></a>
    <p class="subtitle">Themes</p>
    <a class="title" onclick="SetTheme('dark')"><div style="background-color: black; color:rgba(138, 138, 138, 1)">DARK</div></a>
</div>`
document.getElementById('HEADER').insertAdjacentHTML("afterbegin",hedr)
