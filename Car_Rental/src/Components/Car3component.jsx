/* eslint-disable react/no-unescaped-entities */
import Car3 from "/src/assets/car3_image.png";
import Jeep from "/src/assets/jeep_icon.png";
import Styles from "./Car3component.module.css";
import Label from "/src/assets/label.png";
import Hiddencharge from "/src/assets/offer.png";

const Car3Component = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.Carsimage}>
        <img src={Car3} alt="Carsimage" className={Styles.Car3image} />
      </div>
      <div className={Styles.textSection}>
        <div className={Styles.ValueDeals}>
          <p className={Styles.chooseUs}>why choose us</p>
          <p className={Styles.BestDeals}>
            Best valued deals you will ever find
          </p>

          <p className={Styles.mainText}>
            Discover the best you'll ever find With our unbeatable offers.
            
            We're dedicated to providing you with the best value for money,
            <br /> so can enjoy top-quality services and products without
            breaking <br /> the bark. Our deals are designed to give you the
            ultimate renting <br/> so don't miss out on your chance to save big
          </p>

          <button className={Styles.myButton}>Find Details</button>
        </div>
        <div className={Styles.Features}>
          <div className={Styles.Feature1}>
            <div>
              <img src={Jeep} alt="jeepicon" className={Styles.Jeepicon} />
            </div>
            <div className={Styles.featDesc}>
              <p className={Styles.Country}>Cross Country Drive</p>
              <p>
                Take your driving experience to the next level with our top
                notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className={Styles.Feature1}>
            <div>
              <img src={Label} alt="jeepicon" className={Styles.Jeepicon} />
            </div>
            <div className={Styles.featDesc}>
              <p className={Styles.Country}>All Inclusive Pricing</p>
              <p>
                Get everything you need in one convinient transparent price with our all-inclusive pricing policy
              </p>
            </div>
          </div>
          <div className={Styles.Feature1}>
            <div>
              <img src={Hiddencharge} alt="jeepicon" className={Styles.Jeepicon} />
            </div>
            <div className={Styles.featDesc}>
              <p className={Styles.Country}>No Hidden Charges</p>
              <p>
                Enjoy peace of mind with out no hidden charges.We believe in trabsparent and honest pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car3Component;
