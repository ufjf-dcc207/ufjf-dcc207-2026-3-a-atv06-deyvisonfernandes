import { useState } from "react"
import "./Atributo.css";

export default function Atributo(){
        const [status, setStatus] = useState<number>(0);
    function aumentaStatus(){
        if(status == 6){
            setStatus(0);
        }
        else{
            const aux = status
        setStatus(aux + 1);
        }
       
    }
     function diminuiStatus(){
        if(status === 0){
            setStatus(0);
        }
        else{
            const aux = status
        setStatus(aux - 1);
        }}

    return(
        <>

        <div className="estrela"> {"⭐".repeat(status)} 
        <span className="inativo">{"⭐".repeat(6-status)}</span>  </div>
        <div className="acao">
        <button onClick={aumentaStatus}>+</button>
        <button onClick={diminuiStatus}>-</button></div>
        </>
    )
}