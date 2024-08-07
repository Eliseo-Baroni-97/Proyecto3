import React from "react";
import { useState, useEffect} from "react";

const TexH2 = () => {

    const[text,setText] = useState ("");
    const hanleText = (e) =>{
        setText(e.target.value);
    }
    useEffect ( ()=>{
        console.log("componente montado");
        return()=>{
            console.log("componente Desmontado")
        }
    },[]);

    return (
        <div>
            <input type="text" onChange={hanleText}/> 
            <h2>{text}</h2>
        </div>
    );
};

export default TexH2;
