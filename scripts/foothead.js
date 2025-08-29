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
<div class="hero-head has-text-centered headr-flex">
    <div class="filler"></div>
    <a href="index.html"><p class="title has-text-centered" style="font-size: 5rem;"><u> Jakims </u></p></a>
    <img src="kyti.png" class="image is-96x96" style="margin-left: 1rem;">
    <div class="theme-nest" onclick="switchTheme()">
        <div class="click-nest">
            <div class="bircle"></div>
            <div class="wircle"></div>
            <div class="wshadow"></div>
            <div class="bshadow"></div>
        </div>
    </div>
</div>
`
document.getElementById('HEADER').insertAdjacentHTML("afterbegin",hedr)
