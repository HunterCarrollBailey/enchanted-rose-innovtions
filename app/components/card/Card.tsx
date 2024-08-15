import React from "react"
interface CardProps {
    id? : string | string[];
    adlClasses? : string | string[];
    children : React.ReactNode;
}
const Card : React.FC<CardProps> = ({id, adlClasses, children }) => {
    return (
        <div id={id} className={`bg-slate-800/70 backdrop-blur-sm p-5 rounded-2xl shadow-md shadow-cyan-400 border border-cyan-400 ${adlClasses}`}>
            {children}
        </div>
    );
}
export default Card;
