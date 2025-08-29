class PhotoInfo {
    constructor(src, nick, dateplace, desc, group) {
        this.src = src;
        this.nick = nick;
        this.dateplace = dateplace;
        this.desc = desc;
        this.group = group;
}}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } /* this function is from: https://www.w3schools.com/JS//js_random.asp */

function noRepeatRnd(min, max, list) {
    let pos = getRndInteger(min, max)
    if (list.includes(pos) == true) {
        return noRepeatRnd(min, max, list)
    }
    else {
        return pos
    }
}

const images = [
    new PhotoInfo("imagems/whiteheat.jpeg", "whiteheat",    "12.12.2024[home]",         "crazy heater",                         "cats"),
    new PhotoInfo("imagems/heat.jpeg",      "amelia",       "13.12.2024[home]",         "amelia on da heater",                  "cats"),
    new PhotoInfo("imagems/windew.jpeg",    "windew",       "11.1.2025[by the window]", "windew",                               "cats"),
    new PhotoInfo("imagems/school.jpeg",    "school",       "14.1.2025[school]",        "how school be",                        "moments"),
    new PhotoInfo("imagems/twoofthem.jpeg", "theytwo",      "16.1.2025[home]",          "they two",                             "cats"),
    new PhotoInfo("imagems/howilook.jpeg",  "howilook",     "23.1.2025[home]",          "how i look when",                      "cats"),
    new PhotoInfo("imagems/yaawn.jpeg",     "yaawn",        "23.1.2025[home]",          "lil big little yaaaaaaaaaaaaaaAAAaawn","cats"),
    new PhotoInfo("imagems/sfing.jpeg",     "sfing",        "28.1.2025[home]",          "Sfing(real)",                          "cats"),
    new PhotoInfo("imagems/crazy.jpeg",     "crazy",        "28.1.2025[home]",          "crazy closeup",                        "cats"),
    new PhotoInfo("imagems/nous.jpeg",      "nous",         "28.1.2025[home]",          "lil nous",                             "cats"),
    new PhotoInfo("imagems/house.jpeg",     "house",        "24.2.2025[Portugal]",      "fancy house",                          "travels"),
    new PhotoInfo("imagems/water.jpeg",     "walter",       "24.2.2025[Portugal]",      "Walter",                               "travels"),
    new PhotoInfo("imagems/trees.jpeg",     "trinkos",      "25.2.2025[Portugal]",      "trinkos",                              "travels"),
    new PhotoInfo("imagems/kamelias.jpeg",  "kamelia",      "26.2.2025[Portugal]",      "camelias",                             "travels"),
    new PhotoInfo("imagems/whitey.jpeg",    "somecar",      "17.3.2025[city]",          "some very cutey chonkey car in ma way","cats"),
    new PhotoInfo("imagems/waldabed.jpeg",  "waldabed",     "19.3.2025[home]",          "walda in bed",                         "cats"),
    new PhotoInfo("imagems/ruzukyti.jpeg",  "ruzukyti",     "2.4.2025[the Capital]",    "pinkie springy flowey",                "moments"),
    new PhotoInfo("imagems/larry.png",      "larry.",       "1.5.2025[somewhere]",      "... Larry.",                           "others"),
    new PhotoInfo("imagems/portcar.jpg",    "portcar",      "30.6.2025[Porugal]",       "Nice car",                             "cats"),
    new PhotoInfo("imagems/portflrwr.jpg",  "portflwr",     "30.6.2025[Portugal]",      "Flower closeup",                       "travels"),
    new PhotoInfo("imagems/portdrain.jpg",  "drain",        "2.7.2025[Portugal]",       "People say water flows here",          "travels"),
    new PhotoInfo("imagems/mogingvjw.jpg",  "moging",       "20.8.2025[Austria]",       "Jedno z mnoha krásných rán",           "travels"),
    new PhotoInfo("imagems/fieldmiging.jpg","morgin",       "22.8.2025[Austria]",       "Poslední ráno před koncem",            "travels"),
    new PhotoInfo("imagems/saltyburg.jpg",  "saltyburg",    "22.8.2025[Austria]",       "Finální destinace našeho šestidenního výletu na kole", "travels" ),
] /* nejnovejsi na konci */

const groups = ["others","travels","cats","moments"] /* pořadí těchto skupin rozhodne o pořadí na stránce (je to zde od zadu do predu)*/
/* nejmensi skupiny prvni, aby se to dalo hezky projit */

function FillIn(source, nickname, date_place, description) {
    let postbox = `
        <div class="cell gallery_pick">
            <img src="${source}" alt="${nickname}" title="${nickname}" onclick="window.open(this.src)" class="image">
            <p><i class="date">${date_place}</i> – ${description}</p>
        </div>
                    `
    return postbox
}

function featGallery() {
    /* random photos */
    const featgal = document.getElementById("GALLERYSFEATURED")
    featgal.innerHTML = ""
    const usedposs = []
    const delka = images.length - 1
    
    for (let i = 0; i != 6; i++) {

        let prvek = noRepeatRnd(0,delka,usedposs)
        usedposs.push(prvek)
        let p = images[prvek]

        const contentos = FillIn(p.src, p.nick, p.dateplace, p.desc)
        featgal.insertAdjacentHTML("afterbegin",contentos)
    }

    const popis = document.getElementById("WHATFEATPOTO")
    popis.innerHTML = "náhodné"
}

function LatestPhotos(){
    const featgal = document.getElementById("GALLERYSFEATURED")
    featgal.innerHTML = ""

    for (let x = images.length-1; x != images.length-6; x--) {
        let p = images[x]
        let fotka = FillIn(p.src, p.nick, p.dateplace, p.desc)
        featgal.insertAdjacentHTML("beforeend",fotka)
    }

    const popis = document.getElementById("WHATFEATPOTO")
    popis.innerHTML = "nejnovější"
}

function allGallery() {
    const boxikos = document.getElementById("ALLTEHPOTOS")
    boxikos.innerHTML = ""
    delka = images.length

    for (let i = 0; i != delka; i++) {
        p = images[i]
        const elik = FillIn(p.src, p.nick, p.dateplace, p.desc)
        boxikos.insertAdjacentHTML("afterbegin",elik)
    }
    
    //const yappayap = `
    //<div class="cell has-text-centered">
    //    <h1 class="subtitle">
    //        ▫▀▀▀▄▀▐▌▄▐▌▫▄▄██▀▐▌▫▫▫▄■▀▐▌▀■□■■■▄▫▀▄█▫█■■□▄▀□□▫■▀▀▄█▀■▄▫▀█■▐▌█▀▐▌□▀
    //        <br><br>Hello, aohj!!! Toto jsou všechny fotki, které tu mám! Jsou seřazeny (12345reverse) 
    //        od nejnovějších po nejstarší :))) Nahoře jsou tlačitka, kterými můžeš změnit to, jak se řadí! 
    //        <br><br> <u>ALL</u> - to nemačkej, nic se nezměníi 
    //        <br> <u>SCRAMBLE</u><sup>D EGGS</sup> - náhodně promíchá vaj- FOTKY!
    //        <br> <u>GROUP</u> - seskupí fotky do skupin podle tématu
    //        <br><br>□▄▫▄□■▫■▐▌□█■▫▄□▐▌▫▐▌██▄▐▌□□▐▌▐▌▐▀▀▄▐▌■■▀▐▌█▀▌▐▌□▀█▀▫▄□▫▄■█▀▐▌█
    //    </h1>
    //</div>
    //`
    //boxikos.insertAdjacentHTML("afterbegin",yappayap)

    const tajtl = document.getElementById("MEJNTAJTL")
    tajtl.innerHTML = "GALLERY – ALL"
    const infoo = document.getElementById("INFOOFOTO")
    infoo.innerHTML = "all photos – from newest to oldest"
}

function allScramble() {
    const boxikos = document.getElementById("ALLTEHPOTOS")
    boxikos.innerHTML = ""
    /*const usedphotos = []*/
    const delka = images.length
    const all_imgs_copy = images.slice(0)

    /* stejny for loop jako v featGallery, ale misto 5 tam ma pocet vsech fotek */
    for (let i = 0; i != delka; i++) {
        
        let prvek = getRndInteger(0,all_imgs_copy.length-1)/*let prvek = noRepeatRnd(0,delka,usedphotos)*/
        /*usedphotos.push(prvek)*/
        let p = all_imgs_copy[prvek]
        
        const contentos = FillIn(p.src, p.nick, p.dateplace, p.desc)
        boxikos.insertAdjacentHTML("afterbegin",contentos)

        all_imgs_copy.splice(prvek, 1)
    }

    const tajtl = document.getElementById("MEJNTAJTL")
    tajtl.innerHTML = "GALLERY – SCRAMBLED"
    const infoo = document.getElementById("INFOOFOTO")
    infoo.innerHTML = "randomly mixed photos"
}

function groupPhotos() {
    const boxikos = document.getElementById("ALLTEHPOTOS")
    boxikos.innerHTML = ""
    
    for (let x in groups) {
        /* podle skupin projdu fotky a priradim je k urcite skupine, potom to vsechno zpatlam na stranku a pak udelam dalsi skupinu */
        const g_posts = []
        const group_name = groups[x]
        const gn = group_name
        for (let y in images) {
            if (images[y].group == gn) {
                g_posts.push(images[y])
            }
        }
        /* davam postupne fotky na stranku */
        for (let p in g_posts) {
            const i = g_posts[p]
            const ppp = FillIn(i.src, i.nick, i.dateplace, i.desc)
            boxikos.insertAdjacentHTML("afterbegin",ppp)
        }
        /* davam tam nazev skupiny dopredu */
        const yaip = `
            <div id="${gn}" class="cell has-text-centered" style="display:flex; justify-content:center;align-items:center; background-color:var(--contrast_color); box-shadow: var(--shadow)">
                <div style="padding:1.5rem;display:block">    
                    <p class="title" style="font-size:5rem">
                        ${gn}
                        <br>▬►
                    </p>
                    <p style="margin-top:2.5rem"><a href="#HEADER" class="subtitle my-a">zpět nahoru</a></p>
                </div>
            </div>
        `
        boxikos.insertAdjacentHTML("afterbegin",yaip)
    }
    
    

    const tajtl = document.getElementById("MEJNTAJTL")
    tajtl.innerHTML = "GALLERY – GROUPED"

    const infoo = document.getElementById("INFOOFOTO")
    var group_info = "Group order:"
    for (let g in groups) {
        let skupina = groups[groups.length-g-1]
        group_info += `&emsp; <a class="my-a" href="#${skupina}">${skupina}</a>`
    }
    infoo.innerHTML = group_info
}

/* nefunguje to a nevim proc, musim jit na trenink */
/* co??? myslim ze uz to funguje, asi jsem to zapomnel smazat */
/* ted nefunguje group photos, nevim proc, nevim jestli to bylo to, co nefungovalo pred tim, :sob: */
/* jsem trouba - u obrazku je nazev skupiny, do ktere patri, a ja zmenil nazvy :sob: */
