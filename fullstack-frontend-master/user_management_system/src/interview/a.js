import React from 'react'

export default function a(props) {
return (
    <div>
        <h1>Good Morning</h1>
        <p>{props.name}</p>
        <p>{props.address}</p>
        <p>{props.phone}</p>
    </div>
  )
}
