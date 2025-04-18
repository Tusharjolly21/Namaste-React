import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
