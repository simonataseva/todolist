import React from "react"

function ContactCard(props) {
    return (
      <div className="contact-card">
        <img src={props.contact.imgUrl}/>
        <h1>{props.contact.name}</h1>
        <p>Breed: {props.contact.breed}</p>
        <p>Age: {props.contact.age}</p>
      </div>
    )
}

export default ContactCard