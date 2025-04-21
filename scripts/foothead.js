const futr = `
    <div class="columns">
        <div class="column">
            <img src="feet.png" alt="2 foot" class="image is-2by1">
        </div>
    </div>
    <div class="columns is-multiline has-text-centered ffff">
        <div class="column is-one-quarter">
            <p class="title">MADE WITH HTML, CSS AND <a href="https://bulma.io" class="my-a" target="_blank">BULMA</a></p>
        </div>
        <div class="column half">
            <a href="" class="no-u"><p class="title" style="font-size: 3rem; text-decoration: underline; font-style: italic">ABOUT JAKIMS</p></a>
        </div>
        <div class="column is-one-quarter">
            <p class="title">© 2025 Jakims page is licensed under <a class="my-a" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a></p>
        </div>
    </div>`;
document.getElementById('FOOTER').insertAdjacentHTML("beforeend",futr)


const hedr = `
<div class="hero-head has-text-centered" style="display: flex; align-items: center; justify-content: center; ">
    <a href="home.html"><p class="title has-text-centered" style="font-size: 4rem;"><u> Jakims </u></p></a>
    <img src="kyti.png" class="image is-96x96" style="margin-left: 1rem">
</div>`
document.getElementById('HEADER').insertAdjacentHTML("afterbegin",hedr)