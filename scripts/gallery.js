class PhotoInfo {
    constructor(src, nick, dateplace, desc) {
        this.src = src;
        this.nick = nick;
        this.dateplace = dateplace;
        this.desc = desc;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } /* this function from: https://www.w3schools.com/JS//js_random.asp */

const images = [
    new PhotoInfo("imagems/crazy.jpeg","crazy","unknown[home]","crazy closeup"),
    new PhotoInfo("imagems/heat.jpeg","amelia","unknown[home]","amelia on da heater")
]

function FillIn(source, nickname, date_place, description) {
    let postbox = `
        <div class="cell gallery_pick">
            <img src="${source}" alt="${nickname}" title="${nickname}" class="image">
            <p class="subtitle"><i class="date">${date_place}</i> – ${description}</p>
        </div>
                    `
    return postbox
}

function featGallery() {
    const featgal = document.getElementById("GALLERYSFEATURED")
    
    for (let i = 0; i = 5; i++) {
        let prvek = getRndInteger(0,images.lenght)
        console.log(prvek)
        let p = images[prvek]
        const contentos = FillIn(p.src, p.nick, p.dateplace, p.desc)
        console.log(prvek)

        featgal.insertAdjacentHTML("afterbegin",contentos)
        
    }
}

/* nefunguje to a nevim proc, musim jit na trenink */
