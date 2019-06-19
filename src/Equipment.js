import React from "react"

function Equipment(props) {
    return (
        <div>
            <h2>{props.equipment.name}</h2>
            <p>{props.equipment.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} 
             - {props.equipment.description}</p>
        </div>
    )
}

export default Equipment