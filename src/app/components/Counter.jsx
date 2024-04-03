"use client"

import React from "react";
import CounterItem from "./CounterItem";
import { useState } from "react";
import Link from "next/link"


const Counter = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("Jan 01, 2025")
    const [time, setTime] = useState("00:00:00")
    const [color, setColor] = useState("#FFF")

    const changeCounter = () => {

        const newYearDate = new Date('Jan 01, 2025 00:00:00').getTime()
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
        // CONTADOR DEMORANDO PARA APARECER
    }

    setInterval(changeCounter, 1000)

    console.log(time, date, color, title)

    return (
        <div className="bg-white bg-opacity-90 w-[800px] h-[500px] rounded-lg relative">
            <h1 className="text-black text-center py-8 text-4xl font-bold">Contador de Horas</h1>
            <div className="flex flex-row gap-8 items-center justify-center text-black text-center">
                <div>
                    <CounterItem time={days} />
                    <p className="pt-4">Dias</p>
                </div>
                <div>
                    <CounterItem time={hours} />
                    <p className="pt-4">Horas</p>
                </div>
                <div>
                    <CounterItem time={minutes} />
                    <p className="pt-4" >Minutos</p>
                </div>
                <div>
                    <CounterItem time={seconds} />
                    <p className="pt-4">Segundos</p>
                </div>
            </div>
            <Link href="/define" title={title} setTitle={setTitle()} className="text-black font-bold absolute bottom-0 right-0 py-2 px-8 mr-4 mb-4 bg-white rounded-lg">Criar Contador →</Link>
        </div>
    )
};

export default Counter;
