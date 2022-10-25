import React from "react"

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt=""/>
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="../Card/phone.png" alt="" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="../Card/email.png" alt="" />
        <p>mr.whiskaz@catnpa.meow</p>
        <p>{addTowNumbers(person.name, person.phone)}</p>
      </div>
    </div>
  )
}

const person = {
  name: "you triggered Contact.jsx",
  phone: "010-2222-2222"
}

const {name, phone} = person
console.log(name)
console.log(phone)

function addTowNumbers(a, b) {
  return a + b
}