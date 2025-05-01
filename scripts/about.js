function MakeItSilly() {
    let not_silly_intro = `
        <div class="hero-head has-text-centered" id="INTRO_NS" name="introduction">
            <h1 class="title">Hi and Hello!</h1>
            <h1 class="title">my name is Jakim :)</h1>
            <h1 class="title">and this is my page.</h1>
        </div>
        `
    let silly_intro = `
        <div class="hero-head has-text-centered" id="INTRO_S" name="introduction">
            <h1 class="title">Helou!</h1>
            <h1 class="title">me Jakim :)</h1>
            <h1 class="title">dis my page.</h1>
        </div>
        `
    let silly_amp = `
    <h1 class="title" id="AMPsign">About me person</h1>
    <p class="subtitle" id="AMPcontent">
        Am Jakim. I like parkour and playing
        <u><a href="https://steamcommunity.com/profiles/76561198300678178/" target="_blank">puter games</a></u> with frients.
            I also like programming and puter scienc.
            Currenly, I should study, I do not. Am the silliest person alive. No one can stop me but myself. I love creating things.
            I like to create art in any form. I like poetry and surrealistic things
    </p>
    `
    let not_silly_amp = `
    <h1 class="title" id="AMPsign">About me</h1>
    <p class="subtitle" id="AMPcontent">
        I like parkour and playing
        <u><a href="https://steamcommunity.com/profiles/76561198300678178/" target="_blank">computer games</a></u> with my friends.
            I also like programming and computer science.
            I am currently on my studies and I do study hard!!!<sup> Maybe not...</sup>. I enjoy silly humor and I love creating things in any form.
             I also like poetry and surrealistic things. Let that be anything.
    </p>
    `
    let iii = document.getElementsByName("introduction")
    let amps = document.getElementById("AMPsign")
    let ampc = document.getElementById("AMPcontent")


    if (iii[0].id == "INTRO_S") {
        iii[0].remove()
        amps.remove()
        ampc.remove()
        
        document.getElementById("MAINHERO").insertAdjacentHTML("afterbegin",not_silly_intro)
        document.getElementById("ABOUTMEPERSON").insertAdjacentHTML("afterbegin",not_silly_amp)
    }
    else {
        iii[0].remove()
        amps.remove()
        ampc.remove()
        
        document.getElementById("MAINHERO").insertAdjacentHTML("afterbegin",silly_intro)
        document.getElementById("ABOUTMEPERSON").insertAdjacentHTML("afterbegin",silly_amp)
    }
}