/* eslint-disable react/jsx-key */
import styles from "./RentalFleet.module.css";
import { useState } from "react";

const RentalFleet = () => {
  const data = [
    {
      key: "1",
      title: "Audi Q3",
      img: "https://images.unsplash.com/photo-1561924563-d9ad0f32b23f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      key: "2",
      title: "Benetly",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Continental/7771/1676965640042/front-left-side-47.jpg?tr=w-880,h-495",
    },
    {
      key: "3",
      title: "Thar",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1280px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg",
    },
    {
      key: "4",
      title: "RangeRover",
      img: "https://img.etimg.com/thumb/msid-69429504,width-650,height-488,imgsize-586493,resizemode-75/jlr-unveils-petrol-variant-of-range-rover-sport-at-rs-86-71-lakh.jpg",
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
        </div >
        <div className={styles.rmainright}>

          {data.map((o) => {
            if (o.key === toggle) {
              return (
                <img
                key={o.key}
                src={o.img}
                className={styles.icontainer}
                />)
              }
              else
              return null;
            
          })}
          </div>
      </div>
    </div>
  );
};

export default RentalFleet;
