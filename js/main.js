'use strict'

var ballSize = 100

function onBallClick(elBall, maxDiameter){
    var randNum = (getRandomIntInclusive(20, 40))
if(ballSize >= maxDiameter)ballSize = 100 - randNum

    console.log(ballSize)
    console.log(elBall)
    ballSize += randNum
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerHTML = ballSize

elBall.style.background = getRandomColor()

}


