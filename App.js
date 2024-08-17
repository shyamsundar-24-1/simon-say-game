let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let highestLevel = 0; // Variable to track the highest level

let h3 = document.querySelector("h3");
let h4 = document.createElement("h4"); // Element to display the highest level
document.body.appendChild(h4); // Append the h4 element to the body

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Started");
        started = true;
    }

    levelUp();
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function name() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function name() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level : ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game over! Your score : <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);

        if (level > highestLevel) {
            highestLevel = level; // Update highest level if current level is greater
        }

        h4.innerText = `Highest Level: ${highestLevel}`; // Display the highest level

        reset();
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}





//below is sharadha code in upeer code i added highscore feature as well

// let gameSeq = [];
// let userSeq = [];


// let btns = ["yellow", "red", "green", "purple"];

// let started = false;
// let level = 0;


// let h3 = document.querySelector("h3");

// document.addEventListener("keypress", function() {
//     if (started == false) {
//         console.log("Game Started");
//         started = true;
//     }

//     levelUp();
// })

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function name() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function name() {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h3.innerText = `Level : ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`)
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }


// function checkAns(idx) {

//     if (userSeq[idx] == gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);

//         }

//     } else {
//         h3.innerHTML = (`Game over! Your score : <b>${level}</b> <br> Press any to start again`);
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 200)
//         reset();
//     }

// }

// function btnpress() {
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnpress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }