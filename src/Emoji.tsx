import "./Emoji.css";

type EMOJI_KEYS = "happy" | "cowboy" | "crazy";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["cowboy", "🤠"],
    ["crazy", "🤪"],
]);


export default function Emoji(){
    return(
        <div className="emoji" >
            {EMOJI_MAP.get("happy") || "🤔"}
            </div>
    )
}