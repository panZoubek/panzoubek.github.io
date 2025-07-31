// adding profiles to the profile history

const way_to_imgs = "imagems/steam_pfps/";

const profiles = [
    ["sky.jpg", "sky", ["31.7.2025-now"]],
    ["pianowalker.jpg", "the piano walker", ["28.7.2025-31.7.2025"]],
    ["gettingawaywithit.png", "getting away with it", ["19.7.2025-28.7.2025"]],
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
                <div class="p_item3 datess" id="USAGE_DATES${i}">           
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
            <p class="pdate">□${prof_dates[d]}</p>
        `;
        daticka.insertAdjacentHTML('beforeend',cntnt);
    };
};