import React from 'react'
import './contact.css'
import Con from '../../assets/image/contact.png'

function contact() {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={Con}alt='contact'/>
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xpwzrvpo" method="POST">
        <input name="Username" type="text" placeholder='Name'/>
        <input name="Email" type="email" placeholder='Email' />
        <textarea name="message" id="textarea" placeholder='messageme'></textarea>
        <input type="submit" id="btn" value="Submit"/>
        </form>   
      </div>

    </div>
  )
}

export default contact;
