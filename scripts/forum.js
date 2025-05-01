class ForumPostInfo {
    constructor(pfp, name, date, content, reply) {
        this.pfp = pfp
        this.name = name
        this.date = date
        this.content = content
        this.reply = reply
    }
}

const forumposts = [
    new ForumPostInfo("pfps/ami.png", "Amálka", "5.4.2025", "WET FOOD?!! :3", "You gave Amálka wet food, despite her head was between you and the bowl"),
    new ForumPostInfo("pfps/vini.png", "vinicius", "5.4.2025", "Wait. Which forum is this?", "This is not Forum Romanum"),
    new ForumPostInfo("pfps/leo.png", "Leošek", "5.4.2025" ,"PUT ME DOOOWND!!! MAWAUU!", "You indeed did not put him down"),
    new ForumPostInfo("pfps/jakim.png", "Jakim", "5.4.2025", "I did not even finish this site and you guys are already here :)", "You replied and the flower bloomed"),
    new ForumPostInfo("pfps/leo.png", "Leošek", "30.4.2025" ,"Jakim does not know what 'Estuárie' is", "Miow Miow"),
] /* newest at the bottom */

function FFillIn(pfp_src, nickname, date, kontentos, reply_text) {
    return `
        <div class="cell featured_post">
            <div class="user_info">
                <img src="${pfp_src}" alt="pfp" class="image is-64x64">
                <h1 class="title">${nickname}</h1>
            </div>
            <div class="message">
                <p class="subtitle"><i class="date">${date}</i> – ${kontentos}</p>
            </div>
            <div class="reply_button" title="${reply_text}">
                <p class="subtitle" style="padding-left: 0.4rem"><b>reply</b></p>
            </div>
        </div>
    `
}

function FeaturedFPosts(){
    doc = document.getElementById("FORUMGRID")
    for (let i=4;i!=0;i--) {
        post = forumposts[i]
        htmelos = FFillIn(post.pfp, post.name, post.date, post.content, post.reply)
        doc.insertAdjacentHTML("beforeend",htmelos)
    }
}

function AllForum(){
    doc = document.getElementById("FORUMGRID")
    for (i=(forumposts.length-1);i>=0;i--) {
        post = forumposts[i]
        htmelos = FFillIn(post.pfp, post.name, post.date, post.content, post.reply)
        doc.insertAdjacentHTML("beforeend",htmelos)
    }
}