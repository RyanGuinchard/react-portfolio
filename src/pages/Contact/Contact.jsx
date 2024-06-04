import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error));
  };

  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;