let letters = document.querySelectorAll("#logo path");
for (let i = 0; i < letters.length; i++) {
    console.log(`i[${i + 1}] ${letters[i].getTotalLength()}`);

}

/* console.log(`Width:${innerWidth}\nHeight:${innerHeight}`); */
/* let piano = document.querySelector("#piano"); */
/* if (innerHeight > innerWidth) {
    piano.style.top = "50%";
} */
function logoAnim() {
    /*  let logoBackground = document.querySelector('#logo');
     logoBackground.style.fill = "transparent";
     logoBackground.style.animation = "fill-line 1s ease forwards"; */

    let logos = document.querySelectorAll("#logo path");
    logos[0].style.fill = "transparent";
    logos[0].style.strokeDasharray = "1127px";
    logos[0].style.strokeDashoffset = "1127px";
    logos[0].style.animation = "line-anim 10s ease forwards";

    logos[1].style.fill = "transparent";
    logos[1].style.strokeDasharray = "101px";
    logos[1].style.strokeDashoffset = "101px";
    logos[1].style.animation = "line-anim 10s ease forwards";

    logos[2].style.fill = "transparent";
    logos[2].style.strokeDasharray = "134px";
    logos[2].style.strokeDashoffset = "134px";
    logos[2].style.animation = "line-anim 10s ease forwards";

    logos[3].style.fill = "transparent";
    logos[3].style.strokeDasharray = "214px";
    logos[3].style.strokeDashoffset = "214px";
    logos[3].style.animation = "line-anim 10s ease forwards";

    logos[4].style.fill = "transparent";
    logos[4].style.strokeDasharray = "126px";
    logos[4].style.strokeDashoffset = "126px";
    logos[4].style.animation = "line-anim 10s ease forwards";

    logos[5].style.fill = "transparent";
    logos[5].style.strokeDasharray = "101px";
    logos[5].style.strokeDashoffset = "101px";
    logos[5].style.animation = "line-anim 10s ease forwards";

    logos[6].style.fill = "transparent";
    logos[6].style.strokeDasharray = "991px";
    logos[6].style.strokeDashoffset = "991px";
    logos[6].style.animation = "line-anim 10s ease forwards";

    logos[7].style.fill = "transparent";
    logos[7].style.strokeDasharray = "87px";
    logos[7].style.strokeDashoffset = "87px";
    logos[7].style.animation = "line-anim 10s ease forwards";

    logos[8].style.fill = "transparent";
    logos[8].style.strokeDasharray = "214px";
    logos[8].style.strokeDashoffset = "214px";
    logos[8].style.animation = "line-anim 10s ease forwards";

    logos[9].style.fill = "transparent";
    logos[9].style.strokeDasharray = "144px";
    logos[9].style.strokeDashoffset = "144px";
    logos[9].style.animation = "line-anim 10s ease forwards";

    logos[10].style.fill = "transparent";
    logos[10].style.strokeDasharray = "101px";
    logos[10].style.strokeDashoffset = "101px";
    logos[10].style.animation = "line-anim 10s ease forwards";

    logos[11].style.fill = "transparent";
    logos[11].style.strokeDasharray = "152px";
    logos[11].style.strokeDashoffset = "152px";
    logos[11].style.animation = "line-anim 10s ease forwards";

    logos[12].style.fill = "transparent";
    logos[12].style.strokeDasharray = "97px";
    logos[12].style.strokeDashoffset = "97px";
    logos[12].style.animation = "line-anim 10s ease forwards";

    logos[13].style.fill = "transparent";
    logos[13].style.strokeDasharray = "120px";
    logos[13].style.strokeDashoffset = "120px";
    logos[13].style.animation = "line-anim 10s ease forwards";

    logos[14].style.fill = "transparent";
    logos[14].style.strokeDasharray = "229px";
    logos[14].style.strokeDashoffset = "229px";
    logos[14].style.animation = "line-anim 10s ease forwards";

    logos[15].style.fill = "transparent";
    logos[15].style.strokeDasharray = "74px";
    logos[15].style.strokeDashoffset = "74px";
    logos[15].style.animation = "line-anim 10s ease forwards";

}

function bacgroundAnim() {

    /* logoBackground.style.animation = "fill-line 1s ease forwards 3s"; */
}