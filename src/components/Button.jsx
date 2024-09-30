import React from "react";

export default function Button({ text='click', btnClass, onClick}) {
  return (
    <button 
      className={`btn ${btnClass}`}
      onClick={onClick}>
      {text}
    </button>
  )
}