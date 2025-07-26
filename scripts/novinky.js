
/* pro NEWS a HOME page*/
/* nejnovejsi na zacatek (kdyby insert byl after begin tak naopak(ale je beforeend)) */
const novinecky = [
    ["26.7.2025","Added gaming page with pfp&nick history; minor changes"],
    ["18.7.2025","Slightly edited"],
    ["8.6.2025","Přidána tlačítka v galerii a více!"],
    ["1.5.2025","Všechny linky nyní fungují, zpoloautimazováno pomocí javascriptu :))), stránka nyní plně funkční, stále je co zlepšovat"],
    ["22.4.2025","Made first version of 'About Jakims' page"],
    ["21.4.2025","Uploaded on github"],
    ["21.4.2025","WOW it works, this is awesome"],
    ["21.4.2025","Working on the page"],
    ["5.4.2025","Leošek and others posted"],
    ["5.4.2025","Page created"],
    ["5.4.2025","The sky went on fire"],
]

let tynews = document.getElementById('THENEWS')
let newnews = document.getElementById('NEWESTNEWS')

if (tynews != null) {
    for (let i=0; i < novinecky.length; i++) {
        let content = `
        <div class="cell">
            <div>
                <h1 class="subtitle"><i class="date">${novinecky[i][0]}</i> – ${novinecky[i][1]}</h1>
            </div>
        </div>
        `
        tynews.insertAdjacentHTML("beforeend",content)
    }
}


if (newnews != null ) {
    const newestnews = `
        <div class="cell" style="padding-bottom: 1rem;">
            <p class="subtitle one_new"><i class="date">${novinecky[0][0]}</i> – ${novinecky[0][1]}</p>
            <p class="subtitle one_new">|</p>
            <p class="subtitle one_new"><i class="date">${novinecky[1][0]}</i> – ${novinecky[1][1]}</p>
            <p class="subtitle one_new">|</p>
            <p class="subtitle one_new"><i class="date">${novinecky[2][0]}</i> – ${novinecky[2][1]}</p>
            <p class="subtitle one_new">|</p>
            <p class="subtitle one_new"><a class="my-a" href="novinky.html">look into history ...</a></p>
        </div>
        `
        newnews.insertAdjacentHTML("afterbegin",newestnews)
}



