import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

type EMOJI_KEYS = "happy" | "cowboy" | "crazy";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["cowboy", "🤠"],
    ["crazy", "🤪"],
]);




export default function Emoji(){

    const [status, setStatus] = useState<EMOJI_KEYS>("cowboy")

    function happyClick(){
        console.log("Status", status);
        console.log("Happy!");
        setStatus("happy");
        console.log("Status", status);
    }
    function cowboyClick(){
        console.log("Status", status);
        console.log("Cowboy!");
        setStatus("cowboy");
        console.log("Status", status);
    }

    function crazyClick(){
        console.log("Status", status);
        console.log("Crazy!");
        setStatus("crazy");
        console.log("Status", status);
    }

    function cicloClick(){
        switch(status){
            case "cowboy":
                happyClick();
                break;
            case "happy":
                crazyClick();
                break;
            case "crazy":
                cowboyClick();
                break;
            default:
                happyClick();
                break;
        }
    }

    return(
        <>
        <h1 className="texto">EMOJI</h1>
        <div className="emoji" >
            {EMOJI_MAP.get(status) || "🤔"}
            </div>
        <div>
            <Atributo/>
            <Atributo/>
        </div>
           <div className="acoes">
            <button onClick = {happyClick}>HAPPY</button>
            <button onClick = {cowboyClick}>COWBOY</button>
            <button onClick = {crazyClick}>CRAZY</button>
            <button onClick={cicloClick}>CICLO</button>
            </div> 
           </>
    )
}