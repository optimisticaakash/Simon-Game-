let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
}


function levelUp(){
    userSeq= [];
    level++;
    h2.innerText=`Level ${level}`;

    //random button choose
    let randIdx = Math.floor(Math.random() * btns.length);
    let randomColor= btns[randIdx];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){
    // console.log("curr level :"  , level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over !! Your score was  <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);
        reset();
    }
}

function btnPressed() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
        btn.addEventListener("click" , btnPressed);
}


function reset(){
    started = false;
    gameSeq= [];
    userSeq = [];
    level = 0;
}