import styles from "./Home_page.module.css";
import Car_img from '/src/assets/Car_img.png';

const Home_page = () => {
  return (
    <div className={styles.Home_peg}>
      <div>
        <img className={styles.HomeImg} src={Car_img} alt="Car_img" />
      </div>
      <div className={styles.Home_Desc}>
        <p className={styles.Home_par}>Plan your trip now</p>
        <p className={styles.Home_par_2}> Save Big with our car rental</p>
        <div className={styles.bookings}>
          <button className={styles.btn1}>Book</button>
          <button className={styles.btn2}>My Bookings</button>
        </div>
      </div>

      
    </div>
    // <hr className="border border-danger border-2 opacity-50"></hr>
  );
};

export default Home_page;
