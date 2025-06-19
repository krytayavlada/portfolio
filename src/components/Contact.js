import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact</h2>
      <form className="contact-form" action="#" method="post">
        <label className="visually-hidden contact-field-label" htmlFor="name">Name</label>
        <input className="field" id="name" type="text" placeholder="Name" name="name" required />

        <label className="visually-hidden contact-field-label" htmlFor="email">Email</label>
        <input className="field" id="email" type="email" placeholder="Email" name="email" required />

        <label className="visually-hidden contact-field-label" htmlFor="message">Message</label>
        <textarea className="field field-textarea" id="message" name="message" rows="1" placeholder="Message" required></textarea>

        <button className="contact-submit" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
