import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../Card/${props.img}`} alt="" className="card--image"/>
      <div className="card--stats">
        <img src="../Card/star.png" alt="" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) ·</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p> <span className="bold">From ${props.price}</span>/ person</p>
      <p>{props.str}</p>
    </div>
  )
}