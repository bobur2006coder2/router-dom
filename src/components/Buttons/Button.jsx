import React from 'react'
import "./style.css"
export default function Button({className,name}) {
  return (
    <div>
      <button className={className || "orange_secundary"}>{name||"button"}</button>
    </div>
  )
}
