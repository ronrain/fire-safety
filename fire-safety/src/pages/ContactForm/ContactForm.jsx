import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-4">
      <h1>Contact Us For Services or Employment</h1>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder='Full Name' name="from_name" required />
        <label for="floatingInput">Full Name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='from_email' required />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="tel" className="form-control" id="floatingInput" placeholder='Phone Number' name="from_phone" required />
        <label for="floatingInput">Phone Number</label>
      </div>
      <div className="form-floating mb-3">
        <textarea className="form-control" id="floatingText" placeholder='Leave a Message' name="message" rows="7" required ></textarea>
        <label for='floatingTextarea' >Message</label>
      </div>
      <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">
          Send
        </span>
      </button>
    </form>
  );
};

export default ContactForm