
function clockTime(){
    const agora = new Date()
    const horario =  correctTimetable(agora.getHours()) + ':' + correctTimetable(agora.getMinutes()) + ':' + correctTimetable(agora.getSeconds());

    let relogio = document.querySelector('.time')

    relogio.textContent = horario

}
clockTime()

setInterval(clockTime,1000)


function correctTimetable(number){
    if(number < 10){
        number = '0' + number
    }
    return number
}

