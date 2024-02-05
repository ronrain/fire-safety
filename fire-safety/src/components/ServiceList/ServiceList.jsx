import React from "react"
import { useState } from "react"


const ServiceList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.service.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>{item.code}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceList