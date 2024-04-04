import { useState } from "react";

const useCount = (date) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const changeCounter = () => {

        const newYearDate = new Date(date).getTime()
        const nowDate = Date.now()
        const diferencaTempo = newYearDate - nowDate

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const dayInterval = Math.floor(diferencaTempo / day)
        const hourInterval = Math.floor((diferencaTempo % day) / hour)
        const minuteInterval = Math.floor((diferencaTempo % hour) / minute)
        const secondInterval = Math.floor((diferencaTempo % minute) / second)

        setDays(dayInterval)
        setHours(hourInterval)
        setMinutes(minuteInterval)
        setSeconds(secondInterval)
    }

    setInterval(changeCounter, 1000)

    return ([days, hours, minutes, seconds])

};

export default useCount;
