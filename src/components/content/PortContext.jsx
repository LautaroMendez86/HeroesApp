import React, { createContext, useState } from "react";

export const PortContext = createContext();

export const PortContextProvider = (props) => {

  const [pressBoton, setpressBoton] = useState("fas fa-bars");
  const [navbarMobile, setNavbarMobile] = useState(null);

  const abrirToggle = (e) => {

    if (pressBoton === 'fas fa-bars'){
      setNavbarMobile('inactive')
    }else{
      setNavbarMobile('active')
    }

    if (pressBoton === "fas fa-bars") {
      setpressBoton("fas fa-times");
    } else {
      setpressBoton("fas fa-bars");
    }

  
  };

  const cerrarToggle = (e) => {
    if(e.target.matches('a')){
    setNavbarMobile('fas fa-bars')
    setpressBoton('fas fa-bars')
  }
    
  } 

return (
  <PortContext.Provider
    value={{
      pressBoton,
      abrirToggle,
      navbarMobile,
      cerrarToggle
    }}
  >
    {props.children}
  </PortContext.Provider>
);
  }