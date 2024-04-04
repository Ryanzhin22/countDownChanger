"use client"

import React from "react";
import CounterItem from "./CounterItem";
import useCount from "../hooks/useCount"
import Link from "next/link"
import Title from "../components/Title";


const Counter = ({ inputValues }) => {

    const dateToCount = `${inputValues.date}, ${inputValues.time}`
    const [days, hours, minutes, seconds] = useCount(dateToCount)

    return (
        <div className="bg-white bg-opacity-90 w-[800px] h-[500px] rounded-lg relative">
            <Title title={inputValues.title} />
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
            <Link href="/" className="text-black font-bold absolute bottom-0 right-0 py-2 px-8 mr-4 mb-4 bg-white rounded-lg">Voltar →</Link>
        </div>
    )
};

export default Counter;
