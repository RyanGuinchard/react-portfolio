import React from "react";
import Button from "../../components/Button";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
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
        <input type="hidden" name="form-name" value="contact" />
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
          <button
            type="submit"
            className="
          inline-block px-4 py-2 mt-4
          text-sm font-medium text-white
          bg-[#5C469C] border border-white border-opacity-[.08]
          rounded-full
          transition-colors duration-200
          hover:bg-[#D4ADFC] hover:text-[#5C469C]
      "
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
