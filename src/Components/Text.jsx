import { useState } from "react";
import TexH2 from "./TexH2";
import TexH3 from "./TexH3"

const Text =() =>{
    const [show, setShow] =useState(true);
    const [show2, setShow2] =useState(false);

    function handleSow(){
        setShow (!show);
    }
    function handleSow2(){
        setShow2 (!show2);
    }
    return(
        <div> 
            <button onClick={handleSow}>{show? "Ocultar":"Mostrar"}</button>
            { show === true && <TexH2/>}
            <button onClick={handleSow2}>{show2? "Ocultar":"Mostrar"}</button>
            { show2 === true && <TexH3/>}
            
        </div>
    )
};
export default Text;