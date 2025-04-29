class PhotoInfo {
    constructor(src, nick, dateplace, desc) {
        this.src = src;
        this.nick = nick;
        this.dateplace = dateplace;
        this.desc = desc;
}}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } /* this function from: https://www.w3schools.com/JS//js_random.asp */

const images = [
    new PhotoInfo("imagems/crazy.jpeg","crazy","unknown[home]","crazy closeup"),
    new PhotoInfo("imagems/heat.jpeg","amelia","13.12.2024[home]","amelia on da heater"),
    new PhotoInfo("imagems/house.jpeg","house","unknown[Portugal]","fancy house"),
    new PhotoInfo("imagems/howilook.jpeg","howilook","unknown[home]","how i look when"),
    new PhotoInfo("imagems/kamelias.jpeg","kamelia","unknown[Portugal]","camelias"),
    new PhotoInfo("imagems/nous.jpeg","nous","28.1.2025[home]","lil nous"),
    new PhotoInfo("imagems/ruzukyti.jpeg","ruzukyti","2.4.2025[the Capital]","pinkie springy flowey"),
    new PhotoInfo("imagems/school.jpeg","school","unknown[school]","how school be"),
    new PhotoInfo("imagems/sfing.jpeg","sfing","28.1.2025[home]","Sfing(real)"),
    new PhotoInfo("imagems/trees.jpeg","trinkos","25.2.2025[Portugal]","trinkos"),
    new PhotoInfo("imagems/twoofthem.jpeg","theytwo","unknown[home]","they two"),
    new PhotoInfo("imagems/waldabed.jpeg","waldabed","unknown[home]","walda in bed"),
    new PhotoInfo("imagems/water.jpeg","walter","unknownd[Portugal]","Walter"),
    new PhotoInfo("imagems/whiteheat.jpeg","whiteheat","unknown[home]","crazy heater"),
    new PhotoInfo("imagems/whitey.jpeg","somecar","unknown[city]","some very cutey chonkey car in ma way"),
    new PhotoInfo("imagems/windew.jpeg","windew","unknown[by the window]","windew"),
    new PhotoInfo("imagems/yaawn.jpeg","yaawn","unknown[home]","lil big little yaaaaaaaaaaaaaaAAAaawn")
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
    
    for (let i = 0; i != 5; i++) {
        const delka = images.length - 1
        let prvek = getRndInteger(0,delka)
        let p = images[prvek]
        const contentos = FillIn(p.src, p.nick, p.dateplace, p.desc)
        featgal.insertAdjacentHTML("afterbegin",contentos)
    }
}

function allGallery() {
    const boxikos = document.getElementById("ALLTEHPOTOS")
    delka = images.length

    for (let i = 0; i != delka; i++) {
        p = images[i]
        const elik = FillIn(p.src, p.nick, p.dateplace, p.desc)
        boxikos.insertAdjacentHTML("afterbegin",elik)
    }
}

/* nefunguje to a nevim proc, musim jit na trenink */
