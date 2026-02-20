// adding profiles to the profile history

const way_to_imgs = "steam_pfps/";

const profiles = [
    ["last-letter.jpg", "last letter", ["current profile"]],
    ["Echos.jpg", "Echos", ["14.2.2026-20.2.2026"]],
    ["happy-last-1.jpg", "Happy Last -1", ["13.2.2026"]],
    ["touch-my-soul.jpg", "touch my soul", ["12.2.2026"]],
    ["distant-birb.jpg", "distant birb", ["10.2.2026-11.2.2026"]],
    ["Tears-are-falling.jpg", "Tears are falling", ["25.1.2026-9.2.2026"]],
    ["left-plus-right.jpg", "Left + Right", ["14.1.2026-24.1.2026"]],
    ["nightsky.jpg", "The night sky", ["25.12.2025-13.1.2026"]],
    ["allthatis.jpg", "all that is", ["14.12.2025-24.12.2025"]],
    ["fivesecr.jpg","I have 5 secrets", ["18.11.2025-13.12.2025"]],
    ["twoloves.jpg","two loves",["22.9.2025-17.11.2025"]],
    ["iwasborntodream.jpg","I was born to dream", ["21.9.2025"]],
    ["the-angry-junction.jpg","The angry junction", ["15.9.2025-20.9.2025"]],
    ["i-did-it.jpg","I did it", ["14.9.2025"]],
    ["okilldoit.jpg", "Okay, I'll do it", ["10.9.2025-13.9.2025"]],
    ["lost-soup.jpg", "lost soup", ["29.8.2025-9.9.2025"]],
    ["from-monday-to-today.jpg", "from monday to today", ["24.8.2025-28.8.2025"]],
    ["so-cute.jpg", "so cute", ["17.8.2025-23.8.2025"]],
    ["clippy-super-blush.jpg", "super blush", ["11.8.2025-17.8.2025"]],
    ["clippy.jpg", "I like", ["11.8.2025-12.8.2025", '<a target="_blank" href="https://www.geekwire.com/2011/microsoft-brings-clippy-office-training-game/" class="my-a">img source</a>']],
    ["try-not-to-hate-yourself.jpg", "try not to hate yourself", ["8.8.2025-10.8.2025"]],
    ["salt-lamp-gaming.jpg", "salt lamp gaming", ["5.8.2025-7.8.2025"]],
    ["the-world-sees-me.jpg", "the world sees me", ["2.8.2025-4.8.2025", '<a target="_blank" href="https://www.vecteezy.com/vector-art/22024202-tom-and-jerry-cartoon" class="my-a">img source</a>']],
    ["sky.jpg", "sky", ["1.8.2025"]],
    ["pianowalker.jpg", "the piano walker", ["28.7.2025-31.7.2025"]],
    ["gettingawaywithit.jpg", "getting away with it", ["19.7.2025-28.7.2025", '<a target="_blank" href="https://knowyourmeme.com/memes/he-cant-keep-getting-away-with-it" class="my-a">img source</a>']],
    ["leosek.jpg", "nad", ["main pfp"]]
];
// nejnovejsi na zacatku
// v datech - nejnovejsi na zacatku

const mamka = document.getElementById('MAMKA');

for (let i = 0; i < profiles.length; i++) {
    let prof = profiles[i];
    let content = `
        <div class="cell one_profile">
            <div class="profile_grid">
                <div class="p_item1">
                    <img class="image" src="${way_to_imgs + prof[0]}" alt="${prof[1]}">
                </div>
                <div class="p_item2">
                    <p class="title">${prof[1]}</p>
                </div>
                <div class="p_item3" id="USAGE_DATES${i}">           
                </div>
            </div>
        </div>
    `;

    mamka.insertAdjacentHTML('beforeend',content);

    let prof_dates = prof[2];
    let daticka = document.getElementById(`USAGE_DATES${i}`);
    let num_d = prof_dates.length

    for (let d = 0; d < num_d; d++) {
        let cntnt = `
            <p class="pdate">${prof_dates[d]}</p>
        `;
        daticka.insertAdjacentHTML('beforeend',cntnt);
    };
};