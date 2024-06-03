import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tech from "./pages/Tech/Tech";

import "./App.css";

function AnimatedRoutes() {
  let location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div exit={{ opacity: 0 }}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div exit={{ opacity: 0 }}><About /></motion.div>} />
        <Route path="/contact" element={<motion.div exit={{ opacity: 0 }}><Contact /></motion.div>} />
        <Route path="/tech" element={<motion.div exit={{ opacity: 0 }}><Tech /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;