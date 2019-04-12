let delayInSecond = 1000; //1 second
let squireElem = document.querySelector(".squire");
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let elemPosTop = 50;
let elemPosRight = 0;
let elemPosBottom = 0;
let elemPosLeft = 0;
let goToRight = true;
let goToBottom = true;

let timerPuzzle = setInterval(puzzle, delayInSecond);
function puzzle() {
    elemPosTop = squireElem.offsetTop;
    elemPosBottom = squireElem.offsetTop + squireElem.offsetHeight;
    elemPosLeft = squireElem.offsetLeft;
    elemPosRight = squireElem.offsetLeft + squireElem.offsetWidth;
    if(elemPosLeft <= 0){
        goToRight = true
    }else if(elemPosRight >= windowWidth){
        goToRight = false
    }
    if(elemPosTop <= 0){
        goToBottom = true
    }else if(elemPosBottom >= windowHeight){
        goToBottom = false
    }

    elemPosTop = goToBottom ? elemPosTop+10 : elemPosTop-10;
    elemPosLeft = goToRight ? elemPosLeft+10 : elemPosLeft-10;
    squireElem.style.top = elemPosTop+"px";
    squireElem.style.left = elemPosLeft+"px";
}