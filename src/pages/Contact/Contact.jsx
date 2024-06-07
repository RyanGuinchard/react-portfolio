import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      setMessage("Sent!");
      setName("");
      setEmail("");
      setMessageText("");
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl xl:flex-row mt-32 xl:mt-0">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col mb-10 space-y-4 justify-center items-center min-h-96 xl:mb-0"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col">
          <label className="text-left">Your Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="pl-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left">Your Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-1"
          />
        </div>
        <p>
          <div className="flex flex-col">
            <label className="text-left">Your Message:</label>
            <textarea
              name="message"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              required
              className="pl-1 h-16"
            />
          </div>
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
        {message && <p className="text-center">{message}</p>}
      </form>
      <div className="flex flex-col space-y-4 p-4 border-2 border-[#D4ADFC] rounded-lg min-h-96 xl:ml-10 text-[#D4ADFC]">
        <h2>Contact Information</h2>
        <p>Email: ryanguincharddev@gmail.com</p>
        <div className="flex flex-row justify-center">
          <a
            className="mr-2"
            href="https://www.linkedin.com/in/ryan-guinchard/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="transition-colors duration-200 text-[#5C469C] hover:text-[#D4ADFC]"
              icon={faLinkedin}
              size="2x"
            />
          </a>
          <a
            className="ml-2"
            href="https://github.com/RyanGuinchard"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="transition-colors duration-200 text-[#5C469C] hover:text-[#D4ADFC]"
              icon={faGithub}
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
