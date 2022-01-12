import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      {!isOpen && <OpenNavbar setIsOpen={setIsOpen} />}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1>This is a Full page Navbar made using React and Framer Motion </h1>
    </div>
  );
}

const OpenNavbar = ({ setIsOpen }) => {
  return (
    <img
      onClick={() => setIsOpen(true)}
      src="/images/menu.svg"
      alt="open nav"
      className="nav-btn absolute"
    />
  );
};
