import { useState } from "react";
import styles from "./Facts.module.css";
import arrow from "/src/assets/arrowicon.png";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [rotation, setRotation] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeColorAndRotate = () => {
    // Generate a random color or use a predefined color
    const randomColor = 'orangered'; // You can use any color here
    setBackgroundColor(randomColor);
    setRotation(rotation + 180);
  };

  return (
    <div className={styles.dropdown} style={{ backgroundColor: backgroundColor }}>
      <div onClick={() => {toggleDropdown(); changeColorAndRotate();}} className={styles.dropbtn}>
        {props.title}
        <img src={arrow} alt="Icon" className={styles.arrowImg} style={{ transform: `rotate(${rotation}deg)` }} />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <p>{props.desc}</p>
        </div>
      )}
    </div>
  );
}
