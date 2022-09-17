import React from "react";
import { useContext } from "react";
import { PortContext } from "../content/PortContext";

const Boton = () => {

const {pressBoton, abrirToggle} = useContext(PortContext)

  return (
    <li className="item li toggle">
        <i onClick={abrirToggle} className={`${pressBoton}`}></i>
    </li>
  );
};

export default Boton;
