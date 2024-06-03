import React from "react";
import Button from "../../components/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col space-y-4"
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
          <span className="cursor-pointer">
            <Button type="submit">Send</Button>
          </span>
        </p>
      </form>
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
};

export default Contact;
