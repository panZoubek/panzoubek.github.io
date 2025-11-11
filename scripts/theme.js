/* storing current theme using cookies */

const default_theme = 'dark'
const theme_cookie_name = "theme-color"

const Tones = {
    light:{
            "bg":"rgb(240, 240, 240)", /* for content divs */
            "mbg": "rgba(199, 199, 199, 1)",  /* html main bg */
            "shadow": "0rem 0rem 1rem 0.3rem rgb(195, 195, 195)",/* divs shadow for visibility */
            "link": "rgb(50, 43, 255)",   /* color for clickable links */
            "p_color": "rgb(29, 29, 29)", 
            "a_color": "rgb(61, 61, 61)",
            "contrast_color": "white",
            "title_color": "#2e333d",
    }, 
    dark:{
            "bg":"#0f0f0f", /* for content divs */
            "mbg": "#303030",  /* html main bg */
            "shadow": "0rem 0rem 1rem 0.3rem #0f0f0f",/* divs shadow for visibility */
            "link": "#cdd400",   /* color for clickable links */
            "p_color": "rgb(225, 219, 207)", 
            "a_color": "#c2c2c2",
            "contrast_color": "black",
            "title_color":"rgb(245, 240, 232)",
    }
}


function GetTheme() {
    let t = readCookie(theme_cookie_name)
    if (t == "theme not set") {
        SetTheme(default_theme)
    }
    else {
        SetTheme(t)
    }
}
function SetTheme(tone) {
    theme = Tones[tone]
    for (let v in theme) {
        setVar(`--${v}`, theme[v])
    }
    setCookie(theme_cookie_name, tone, 29)
}
function switchTheme() {
    let current = readCookie(theme_cookie_name)
    if (current == "dark") {
        SetTheme('light')
    }
    else{
        SetTheme(default_theme)
    }
}

/* source: https://www.w3schools.com/js/js_cookies.asp */
function readCookie(name) {
    let cookies = document.cookie
    let cook = cookies.split(";")
    for (let coo in cook) {
        let co = cook[coo]
        let c = co.split("=")
        if (c[0] == name) {
            let current_theme = c[1]
            return(current_theme) 
        }
        else {
            console.log("theme not set")
        }
    }
}
function setCookie(name, value, expdays) {
    const dt = new Date()
    dt.setTime(dt.getTime() + (expdays*24*60*60*1000))
    let expiration = "expires=" + dt.toUTCString()
    document.cookie = `${name}=${value};${expiration};path=/`
}


/* source: https://www.w3schools.com/Css/css3_variables_javascript.asp */
var rootik = document.querySelector(':root')
function setVar(name, value) {
    rootik.style.setProperty(name, value)
}