import React from "react";

const Title = ({ title }) => {
    return <h1 className="text-black text-center py-8 text-4xl font-bold">{title ? title : "Controlador de Horas"}</h1>;
};

export default Title;
