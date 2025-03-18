'use strict'

var ballSize = 100


function onBallClick(elBall){
if(ballSize >= 400)ballSize = 50

    console.log(ballSize)
    console.log(elBall)
    ballSize += 50
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerHTML = ballSize

}
