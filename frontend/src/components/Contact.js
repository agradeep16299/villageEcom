import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.05395193934!2d87.47340164807308!3d23.594881498989675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7630603a5abf3%3A0xeaebb2b7fdfe6c74!2sAjodhya%2C%20West%20Bengal%20713152!5e0!3m2!1sen!2sin!4v1664207807932!5m2!1sen!2sin"width="100%" height="350" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xkneojrb" method="POST" className="contact-inputs">
            <input type="text" name="username" placeholder='username' autoComplete='off' required />
            <input type="email" name="useremail" placeholder='enter your email' autoComplete='off' required />
            <textarea name="message" id="" cols="30" rows="10" autoComplete='off' placeholder='your message' required></textarea>
            <input type="submit" value="Send Message" name="submit" />
          </form>
        </div>
      </div>
    </Wrapper >
  )
}
const Wrapper = styled.section`
margin-top: 5rem;
margin-bottom:5rem;
text-align: center;
.contact-form {
  max-width: 50rem;
  margin: auto;
  .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top:4rem;
    input[type="submit"] {
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color:#fff;
        border: 1px solid blue;
        color:  blue;
        transform: scale(0.9);
      }
    }
  }
}
}
@media (max-width:580px ){
    .contact-form{
      max-width:90%;
    }
}
`
export default Contact