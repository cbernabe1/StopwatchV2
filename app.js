

var milli = second =minute =0
var onClicked = false
var myInterval

function startButton(){

    onClicked = !onClicked

    if(onClicked === true){
        if(milli === 0 && second === 0 && minute ===0){
            milli = second = minute = 0
        }       
        myInterval = setInterval(myTimer, 10)
    } else{
        clearInterval(myInterval)
    }
}

function myTimer(){
    milli++
    if(milli === 100){
        second++
        if(second === 60){
            minute++
            if(minute === 60)
            {
                milli = second = minute = 0
            }
        }
    }
document.getElementById('result').innerHTML = `<h1> ${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}:${String(milli).padStart(2, '0')}</h1>
    `
}

function clearButton(){
    clearInterval(myInterval)
    milli = second =minute = 0
    document.getElementById('result').innerHTML = `<h1> ${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}:${String(milli).padStart(2, '0')}</h1>
    `
}