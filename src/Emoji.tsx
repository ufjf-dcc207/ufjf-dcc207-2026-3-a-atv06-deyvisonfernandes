import "./Emoji.css";

type EMOJI_KEYS = "happy" | "cowboy" | "crazy";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["cowboy", "🤠"],
    ["crazy", "🤪"],
]);




export default function Emoji(){
    let status:EMOJI_KEYS = "happy";
    function happyClick(){
        console.log("Status", status);
        console.log("Happy!");
        status = "cowboy";
        console.log("Status", status);
    }

    return(
        <>
        <div className="emoji" >
            {EMOJI_MAP.get(status) || "🤔"}
            </div>
           <div className="acoes">
            <button onClick = {happyClick}>HAPPY</button></div> 
           </>
    )
}