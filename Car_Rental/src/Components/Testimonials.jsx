/* eslint-disable react/no-unescaped-entities */

import styles from "./Testimonials.module.css";
import heart from "/src/assets/heart.png";
const Testimonials = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Review}>
        <p className={styles.Review1}>Reviewed by People</p>
        <p className={styles.Testimo}>Client's Testimonials</p>
        <p className={styles.TestimoText}>
          Discover the positive impact we've made on our clients by reading
          through their testimonials. <br />
          Our clients have experienced our service and results and they are
          eager to share their positive experiences with you
        </p>
      </div>

      <div className={styles.Testimonials}>
        <div className={styles.Test1}>
          <p>
            "We rented a car from this website and <br />
            had an amazing experience! The booking was easy and the rental rates
            were very affordable."
          </p>
          <div className={styles.clients}>
            <img   className={styles.clientImg}
              src="data:image/jpeg;base64,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"
              alt="HarryPotter"
            />

            <p className={styles.ClientName}>Harry Potter</p>

            <img className={styles.heartimg} src={heart} alt="heart" />
          </div>
        </div>
        <div className={styles.Test2}>
          <p>
            "We rented a car from this website and <br />
            had an amazing experience! The booking was easy and the rental rates
            were very affordable."
          </p>
          <div className={styles.clients}>
            <img
              className={styles.clientImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxZNQJ_VJrTfkK1Ov6C6M9o-I1CZ7hrBjpA&usqp=CAU"
              alt=""
            />

            <p className={styles.ClientName}>Hermoine</p>
            <img className={styles.heartimg} src={heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
