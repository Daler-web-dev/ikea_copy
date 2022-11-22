const deadline = "2023-04-03 00:00"


const getRemainingTime = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / 1000 / 60 / 60 / 24)
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days, 
        hours, 
        minutes, 
        seconds 
    }
}

const showTime = (selector, endTime) => {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'), 
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        updater = setInterval(updateTime, 1000)

    function updateTime() {
        const time = getRemainingTime(endTime)
        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds

        if(time.t <= 0) {
            clearInterval(updater)
        }

    }    

}

showTime('.time', deadline)