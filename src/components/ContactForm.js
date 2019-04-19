import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  flex-basis: 50%;

  width: 100%;
  margin: 20px 0;
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px 20px;
    border: 1px solid #ddd;
  }
  textarea {
    height: 200px;
    border-color: #ddd;
  }
  button {
    border: 1px solid #999;
    background-color: transparent;
    padding: 10px 40px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #222;
      border-color: #222;
      color: #fff;
    }
  }
`
const ContactForm = () => (
  <StyledForm
    name="contact"
    method="POST"
    action="https://formspree.io/alexaspalato@gmail.com"
  >
    <input type="text" placeholder="enter your name" />
    <input type="mail" placeholder="enter your mail" />
    <textarea placeholder="enter your message" />
    <button type="submit">Submit</button>
  </StyledForm>
)

export default ContactForm
