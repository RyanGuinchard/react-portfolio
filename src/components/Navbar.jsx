import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const location = useLocation();
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    setActiveLink(currentPath === "" ? "home" : currentPath);
  }, [location]);

  useEffect(() => {
    const activeElement = ref.current.querySelector(".active");
    if (activeElement) {
      controls.start({
        x: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeLink, controls]);

  return (
    <nav
      ref={ref}
      className="
        fixed z-[999] top-4 left-1/2 -translate-x-1/2
        px-3 py-2 rounded-full border border-white border-opacity-[.08]
        bg-white bg-opacity-[.08] backdrop-blur-lg 
      "
    >
      <motion.div
        animate={controls}
        className="
    absolute -z-10
    rounded-full
  "
        style={{
          backgroundColor: "#5C469C",
          top: "15%",
          bottom: "10%",
          left: "0%",
          right: "10%",
          height: "70%",
          width: "80%",
        }}
        transition={{ type: "spring", duration: 0.6 }}
      ></motion.div>
      <ul
        className="
          flex justify-center items-center gap-2 
          font-medium text-white
        "
      >
        <li>
          <Link
            to="/"
            onClick={() => setActiveLink("home")}
            className={`relative text-sm py-2 px-4 tracking-wide inline-block ${
              activeLink === "home" ? "active" : ""
            }`}
            style={{ color: "#D4ADFC" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setActiveLink("about")}
            className={`relative text-sm py-2 px-4 tracking-wide inline-block ${
              activeLink === "about" ? "active" : ""
            }`}
            style={{ color: "#D4ADFC" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => setActiveLink("projects")}
            className={`relative text-sm py-2 px-4 tracking-wide inline-block ${
              activeLink === "projects" ? "active" : ""
            }`}
            style={{ color: "#D4ADFC" }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setActiveLink("contact")}
            className={`relative text-sm py-2 px-4 tracking-wide inline-block ${
              activeLink === "contact" ? "active" : ""
            }`}
            style={{ color: "#D4ADFC" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
