class UserPostInfo{
    constructor(pfp,nick,date,size,kontent){
        this.pfp = pfp
        this.nick = nick
        this.date = date
        this.size = size
        this.kontent = kontent
    }
}

const UserPostsList = [
    new UserPostInfo("pfps/leo.png","Leošek","6.4.2025","is-4","I always nweed to leave the bwed when Jakwim gwoes to slweep bwecause I've bween there allw day and now it isw hwis twurn to be there all nwight :3 "),
    new UserPostInfo("pfps/eboshi.png","Lady Eboshi","6.4.2025","is-3","This is the world I wanted... Good that they did not let that happen."),
    new UserPostInfo("pfps/imrich.png","Imrich","8.4.2025","is-3","Norsko je pěkný a chtěl bych tam někdy jet, ale maj tam hodně ropy a bojím se, že bych spadl do ropného vrtu. Ropa je fajn, ale míň fajn než věci, co jsou víc fajn a víc ekologický."),
    new UserPostInfo("pfps/nonhe.png","Anonym1","8.4.2025","is-3","Dej tam fotku Larryho."),
    new UserPostInfo("pfps/nonhe.png","Anonym1","1.5.2025","is-4",`<b>Laska a zamyšlení</b>
        <br>Co láska jest?<br>Snad jen pouhá lest.<br>Jen fantasie lidmi stvořena<br>Mnou nikdy nepoznána
        <br><br>Toužím po ni čím dál víc<br>A brzy mi rudne líc<br>Pomyšlení, rychlý záblesk<br>Vše nese zvláštní lesk
        <br><br>Má duše těžká, ztrápená<br>Hledá k sobě partnera<br>Všude však jen prázdnota<br>Co volat bych měl do světa?
        <br><br>O lásce tolik slyšel jsem<br>v srdci ji prej všichni nesem<br>Co však to je netuším<br>Své srdce nadějně vysouším.
        <br><br>A hledám, stále hledám<br>tu pravou z mnoha dam<br>Žádná z nich však nevolá<br>Tady jsem, tvá vyvolená
        <br><br>A tak lěžím, přemýšlím<br>Po stropu se slzami koukám<br>Naděje je v nedohlednu<br>Tiše, sám klesám ke dnu.
        <br><br>Že by láska jen pouhý klam?<br>Co vylezl jak had z mnoha tlam?<br>Bez konce je toto utrpení<br>láska asi žádná není.`),
    new UserPostInfo("pfps/jakim.png", "Jakim", "24.8.2025", "is-5", `<b>Thoughts</b> I don't like social media. The big companies behind them are harvesting user data and attention. But who should care? Does it really affect me? I do not really understand theese terms and I am not alone. We do not really have any other choice. Internet and socials have became unseparable parts of our lives.
        <br> I don't like that I can't edit basic file types on my phone. It is a sure thing on a computer. But on a phone with manufacturers operating system people are dependant on apps from iOS or google app stores where many of those apps are paid, have ton of ads and can't even do what I need. I want a phone over which I could have total control. Like on my PC or laptop.`),
]

function FillInPost(post) {
    let layout = `
    <div class="column ${post.size} post_box">
        <div class="poster_info">
            <img src="${post.pfp}" alt="none" class="image is-64x64">
            <h1 class="title">${post.nick}</h1>
        </div>
        <p class="subtitle">
            <i class="date">${post.date}</i> – ${post.kontent}
        </p>
    </div>
    `
    return layout
}

function FeaturedUserPosts(){
    const doc = document.getElementById("HOMEFEATUPOSTS")
    for (let i=UserPostsList.length-1;i>=UserPostsList.length-4;i--) {
        let info = UserPostsList[i]
        let k = FillInPost(info)
        doc.insertAdjacentHTML("beforeend",k)
    }
}

function AllUserPosts(){
    const doc = document.getElementById("ALLTHEPOSTS")
    for (let i=UserPostsList.length-1;i>=0;i--) {
        let info = UserPostsList[i]
        let k = FillInPost(info)
        doc.insertAdjacentHTML("beforeend",k)
    }
}