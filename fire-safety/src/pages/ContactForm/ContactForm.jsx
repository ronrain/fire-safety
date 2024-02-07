import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="floatingInput" placeholder='Full Name' name="from_name" />
      <label for="floatingInput">Full Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='from_email' />
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="tel" className="form-control" id="floatingInput" placeholder='Phone Number' name="from_phone" />
      <label for="floatingInput">Phone Number</label>
    </div>
    <div className="form-floating mb-3">
      <textarea className="form-control" id="floatingText" placeholder='Leave a Message' name="message" rows="7"></textarea>
      <label for='floatingTextarea' >Message</label>
    </div>
    <button type="submit" className="btn btn-primary">Send</button>
  </form>
  );
};

export default ContactForm