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
    <div className="flex flex-col items-center justify-center min-h-screen text-xl mt-16 space-y-10 xl:flex-row xl:space-y-0 xl:space-x-5 xl:items-start xl:pt-20">
      {/* Contact form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col mb-10 space-y-4 items-center p-8 bg-[#1e1e3f] border-2 border-[#D4ADFC] rounded-lg w-4/5 max-w-lg xl:mb-0"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col w-full">
          <label className="text-left text-[#D4ADFC]">Your Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 mt-1 bg-[#5C469C] border-2 border-[#D4ADFC] rounded-lg focus:outline-none focus:border-[#D4ADFC] focus:ring focus:ring-[#D4ADFC] text-white text-base xl:text-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-left text-[#D4ADFC]">Your Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 mt-1 bg-[#5C469C] border-2 border-[#D4ADFC] rounded-lg focus:outline-none focus:border-[#D4ADFC] focus:ring focus:ring-[#D4ADFC] text-white text-base xl:text-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-left text-[#D4ADFC]">Your Message:</label>
          <textarea
            name="message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
            className="p-2 mt-1 bg-[#5C469C] border-2 border-[#D4ADFC] rounded-lg focus:outline-none focus:border-[#D4ADFC] focus:ring focus:ring-[#D4ADFC] text-white h-24 resize-none text-base xl:text-lg"
            style={{ maxWidth: '100%' }} // Prevents overflow
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 mt-4 text-xl bg-[#5C469C] border border-white border-opacity-[.08] rounded-full transition-all duration-300 hover:bg-[#D4ADFC] hover:text-[#5C469C] hover:scale-105"
        >
          Send
        </button>
        {message && <p className="text-center mt-4 text-white">{message}</p>}
      </form>

      {/* Contact info */}
      <div className="flex flex-col space-y-4 p-8 bg-[#1e1e3f] border-2 border-[#D4ADFC] rounded-lg w-4/5 max-w-lg text-[#D4ADFC] items-center xl:min-h-[300px] xl:text-lg">
        <h2 className="text-lg xl:text-xl">Contact Information</h2>
        <p className="text-lg xl:text-xl">Email: ryanguincharddev@gmail.com</p>
        <p className="text-lg xl:text-xl">Phone: (709)765-2219</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/ryan-guinchard/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="transition-colors duration-300 text-[#5C469C] hover:text-[#D4ADFC] text-3xl" icon={faLinkedin} />
          </a>
          <a href="https://github.com/RyanGuinchard" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="transition-colors duration-300 text-[#5C469C] hover:text-[#D4ADFC] text-3xl" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
