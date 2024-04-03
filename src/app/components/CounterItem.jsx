import React from "react";

const CounterItem = ({time}) => {
  return (
    <div className="min-w-40 min-h-40 bg-white rounded-lg flex items-center justify-center" >
        <h2 className="text-5xl font-bold text-black">{time<10 ? "0"+time : time}</h2>
    </div>
  )
};

export default CounterItem;
