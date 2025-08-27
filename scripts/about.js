let not_silly_intro = `
        <h1 class="title">Hi and Hello!</h1>
        <h1 class="title">my name is Jakim :)</h1>
        <h1 class="title">and this is my page.</h1>
    `
let silly_intro = `
        <h1 class="title">Helou!</h1>
        <h1 class="title">me Jakim :)</h1>
        <h1 class="title">dis my page.</h1>
    `
let silly_amp = `
<p class="title" id="AMPsign">About me person</p>
<p class="subtitle" id="AMPcontent">
    Am Jakim. I like parkour and playing
    <u><a href="gaming.html">puter games</a></u> with frients.
        I also like programming and puter scienc.
        Currenly, I should study, I do not. Am the silliest person alive. No one can stop me but myself. I love creating things.
        I like to create art in any form. I like poetry and surrealistic things
</p>
<button class="silly-button" onclick="MakeItSilly()">
    <p>SILLY BUTTON</p>
</button>
`
let not_silly_amp = `
<p class="title" id="AMPsign">About me</p>
<p class="subtitle" id="AMPcontent">
    I like parkour and playing
    <u><a href="gaming.html">computer games</a></u> with my friends.
        I also like programming and computer science.
        I am currently on my studies and I do study hard!!!<sup> Maybe not...</sup>. I enjoy silly humor and I love creating things in any form.
            I also like poetry and surrealistic things. Let that be anything.
</p>
<button class="silly-button" onclick="MakeItSilly()">
    <p>SILLY BUTTON</p>
</button>
`

function MakeItSilly() {

    let iii = document.getElementsByName("introduction")

    if (iii[0].id == "INTRO_S") {
        iii[0].innerHTML = not_silly_intro
        iii[0].id = "INTRO_NS"
        document.getElementById("ABOUTMEPERSON").innerHTML = not_silly_amp
    }
    else {
        iii[0].innerHTML = silly_intro
        iii[0].id = "INTRO_S"
        document.getElementById("ABOUTMEPERSON").innerHTML = silly_amp
    }
}