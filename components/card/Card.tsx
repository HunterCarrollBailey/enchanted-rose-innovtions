import React from "react";
interface CardProps {
  id?: string;
  adlClasses?: string | string[];
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ id, adlClasses, children }) => {
  return (
    <div
      id={id}
      className={`rounded-2xl bg-slate-800/70 p-5 shadow-inner shadow-cyan-400 backdrop-blur-sm ${adlClasses}`}
    >
      {children}
    </div>
  );
};
export default Card;
