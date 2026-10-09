import { useState } from "react"
import "./Atributo.css";
const EMOJI_MAP = new Map<number, string>([
    [0, "☆☆☆☆☆☆"],
    [1, "⭐☆☆☆☆☆"],
    [2, "⭐⭐☆☆☆☆"],
    [3, "⭐⭐⭐☆☆☆"],
    [4, "⭐⭐⭐⭐☆☆"],
    [5, "⭐⭐⭐⭐⭐☆"],
    [6, "⭐⭐⭐⭐⭐🌟"],
])
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
        if(status == 0){
            setStatus(0);
        }
        else{
            const aux = status
        setStatus(aux - 1);
        }}

    return(
        <>
        <div className="estrela"> {EMOJI_MAP.get(status) || "🤔"}</div>
        <div className="acao">
        <button onClick={aumentaStatus}>+</button>
        <button onClick={diminuiStatus}>-</button></div>
        </>
    )
}