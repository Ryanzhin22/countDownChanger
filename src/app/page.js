"use client"

import React, {useState} from "react";
import Link from "next/link"

const Home = () => {

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("Jan 01, 2025")
  const [time, setTime] = useState("00:00:00")
  const [color, setColor] = useState("#ff6961")

  const objProps = {
    title: title,
    date: date,
    time: time,
    color: color,
  }

  return (
  <div className="bg-white h-screen w-full flex items-center justify-center">
    <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg px-8">
        <h2 className="text-black text-3xl text-center font-bold py-6">Criar Contador</h2>
        <div className="flex flex-col items-start">
            <label className="text-black text-md font-bold">Título Contador</label>
            <input type="text" className="rounded my-2 placeholder-gray-400 text-black px-2 py-[3px]" placeholder="Contagem até o ano novo" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col items-start">
            <label className="text-black text-md font-bold">Até qual data contar</label>
            <input type="date" className="rounded my-2 text-black px-2 py-[3px]" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className="flex flex-col items-start">
            <label className="text-black text-md font-bold">Até qual hora contar</label>
            <input type="time" className="rounded my-2 text-black px-2 py-[3px]" value={time} onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div className="flex flex-row items-start">
            <label className="text-black text-md font-bold pr-2">Cor de fundo:</label>
            <input type="color" className="rounded" value={color} onChange={(e)=>setColor(e.target.value)}/>
        </div>
        <div className="flex gap-2 mt-4">
            <Link href={{
              pathname: "/define",
              query: { obj: JSON.stringify(objProps) }
            }} className="text-black py-2 px-4 bg-gray-400 rounded-lg">Enviar</Link>
        </div>
    </div>
  </div>
  )
};

export default Home;
