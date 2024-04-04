"use client"

import React from "react";
import Counter from "../components/Counter";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams()
  const obj = searchParams.get("obj")
  const objParse = JSON.parse(obj)

  return (
  <div className="h-screen w-full flex items-center justify-center" style={{ backgroundColor: `${objParse.color}` }}>
    <Counter inputValues={objParse}/>
  </div>
  )
};

export default page;
