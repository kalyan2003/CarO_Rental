/* eslint-disable react/jsx-key */
import styles from "./RentalFleet.module.css";
import AudiImg from "/src/assets/AudiImg.png";
import bently from "/src/assets/BentlyImg.png";
import { useState } from "react";

const RentalFleet = () => {
  const data = [
    {
      key: "1",
      title: "Audi Q3",

      img: "AudiImg",
    },
    {
      key: "2",
      title: "Benz",
      img: "2.jpg",
    },
    {
      key: "3",
      title: "Thar",
      img: "3.jpg",
    },
    {
      key: "4",
      title: "RangeRover",
      img: "4.jpg",
    },
  ];

  const [toggle, setToggle] = useState("1");

  return (
    <div className={styles.RenFleet}>
      <div className={styles.RenFleetDesc}>
        <p className={styles.models}>Vehicle Models</p>
        <p className={styles.fleet}>Our rental fleet</p>
        <p className={styles.Desc}>
          Choose from variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className={styles.rmain}>
        <div className={styles.RentalData}>
          {data.map(({ title, key, img }) => {
            return (
              <div className={`${styles.ModelButtons}`}>
                <button
                  onClick={() => setToggle(key)}
                  type="button"
                  className={`${styles.Innerbuttons}`}
                >
                  {title}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {data.map((o) => {
            if (o.key === toggle) {
              if (o.key === 1) {
                return;
                <img
                  src={AudiImg}
                  alt="AudiImage"
                  className={styles.AudiImage}
                />;
              }

              if (o.key === 1) {
                return;
                <img
                  src={AudiImg}
                  alt="AudiImage"
                  className={styles.AudiImage}
                />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
