const initbox = document.getElementById("loadbox");
const title = document.querySelector(".title");

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

const loadboxInitAnimation = initbox.animate([
    { transform: "translateY(100px)", opacity: 0 },
    { transform: "translateY(0px)", opacity: 1 }
],
    {
        duration: 450,
        iterations: 1,
        direction: "normal",
        easing: "ease-in-out"
});


const titleInitAnimation = title.animate([
    { transform: "translateY(-35px)"},
    { transform: "translateY(0px)"}
],
    {
        duration: 250,
        iterations: 1,
        direction: "normal",
        easing: "ease-out"
});
titleInitAnimation.play();
loadboxInitAnimation.play();





const judahImages = [
    "https://cdn.discordapp.com/attachments/1465011399586746470/1543810414901465188/image.png?ex=6ad2353d&is=6ad0e3bd&hm=8b7f2d4a01ea2b39b6cf3246cda49bf6688a90cf7a74692006cd5fae4fc1eb76&",
    "https://cdn.discordapp.com/attachments/1465011399586746470/1543823269474472047/image.png?ex=6ad24136&is=6ad0efb6&hm=e1b38a3d794ab3d88f7b74df151f3a19cd15a02ea5dd2217ff3c0a0f3a7b4d59&",
    "https://cdn.discordapp.com/attachments/1465011399586746470/1544908846819053599/image.png?ex=6ad23fbc&is=6ad0ee3c&hm=77a2d2dc7dcece9e14d4114c33bcbf87cbeea1fcb5d58ce5df48f04f49bc9414&",
    "https://cdn.discordapp.com/attachments/1465011399586746470/1546342123505328219/image.png?ex=6ad23093&is=6ad0df13&hm=ecf34b488af5e38513983f3b510d82d64d43daf2782d58b9e98b23e1778096d4&",
    "https://cdn.discordapp.com/attachments/1465011399586746470/1547407680686264360/image.png?ex=6ad21c74&is=6ad0caf4&hm=d732ef80c477532328a9024fbf906f3653edfa685c9364dfcfa61add3155e39c&",
    "https://cdn.discordapp.com/attachments/1465011399586746470/1551732143619833949/image.png?ex=6ad2aeac&is=6ad15d2c&hm=19cad442cc9aa3b9840fbe1c6a004e71ece289b45b746dd14f6fd7eee7674ef5&",
]

const judahLaughImage = document.getElementById("JUDAH");

const judahLaughAudio = document.getElementById("judahlaughmp3");

const judahImageAnimation = judahLaughImage.animate([
    { opacity: 1 },
    { opacity: 0 }
],
    {
        duration: 1500,
        iterations: 1,
        direction: "normal",
        easing: "linear"
});

const judahLaughButton = document.getElementById("judahLaughButton");
judahLaughButton.addEventListener("click", () => {
    judahLaughImage.src = judahImages[getRandomIntInclusive(0, judahImages.length - 1)];
    judahLaughAudio.pause();
    judahLaughAudio.currentTime = 0;
    judahLaughAudio.play();
    judahImageAnimation.cancel();
    judahImageAnimation.play();
});

judahImageAnimation.cancel();