console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover1.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
     ]
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px"
            gameover.play();
        }
     })
}

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        music.play();
        console.log('Checked');
      } else {
        // do that
        music.pause();
        console.log('Not checked');
      }
    });
  });
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxetexts = document.querySelectorAll('.boxtext');
    Array.from(boxetexts).forEach(element =>{ 
        element.innerHTML=""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw";
})