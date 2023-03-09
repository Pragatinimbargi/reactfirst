import React from 'react';
import  JSON from "./details";
import Student from "./Student";
import "./global.css";
const Sy=()=>{
    return(
        <div>
            <Student payload={JSON}/>
        </div>
    )
}
export default Sy