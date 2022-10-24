import React from "react"

export default function Contact() {
  return (
    <div className="contact-card">
      <img src="../public/Card/cat.png" alt=""/>
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="../public/Card/phone.png" alt="" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="../public/Card/email.png" alt="" />
        <p>mr.whiskaz@catnpa.meow</p>
      </div>
    </div>
  )
}

function addTowNumbers(a, b) {
  return a + b
}