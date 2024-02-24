/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import styles from "./RentalFleet.module.css";
import { useState } from "react";
import data from "./Data.json";

const RentalFleet = () => {
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
          {data.map((o) => {
            return (
              // <div className={`${styles.ModelButtons}`}>
              <div
                onClick={() => setToggle(o.key)}
                type="button"
                className={`${styles.Innerbuttons}`} 
               
              >
                {o.title}

              </div>
              // </div>
              
            );
          })}
        </div>
        <div className={styles.rmainright}>
          {data.map((o) => {
            if (o.key === toggle) {
              return (
                <img key={o.key} src={o.img} className={styles.icontainer} />
              );
            } else return null;
          })}
        </div>
        <div className={styles.rTable}>
          { data.map((o) => {

          if(o.key === toggle) {
            return(
          <table className={styles.Table}>
            <tr>
              <th colspan="2">{o.rent}</th>
            </tr>
            <tr>
              <td>Model</td>
              <td>{o.Model}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{o.year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{o.Doors}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{o.AC}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{o.Transmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{o.Fuel}</td>
            </tr>

          </table>
            );
          } else return null;
})}

             <button className={styles.ResBtn}>RSERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
