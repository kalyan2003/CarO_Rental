import styles from "./Footer.module.css";
import Gmail from "/src/assets/email.png";
import Phone from "/src/assets/telephone.png";

const FooterMain = () => {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.Rentalinfo}>
        <p className={styles.footPara}>
          <span className={styles.CarRen}>CAR</span> Rental
        </p>
        <p className={styles.footPara1}>
          We offers a big range of vehicles <br /> for all your driving needs.
          We have <br />
          the perfect cor to meet your needs.
        </p>
        <p className={styles.footPara2}>
          <img  className={styles.GmailImg}  src={Gmail} alt="" /> +91 7864832668
        </p>
        <p className={styles.footPara2}><img src={Phone} className={styles.phoneImg} alt="" />   carrental@gmail.com</p>
      </div>

      <div className={styles.CompanyLocat}>
        <p className={styles.comName}>Company</p>
        <p>Mumbai</p>
        <p>Hyderabad</p>
        <p>Chennai</p>
        <p>Pune</p>
      </div>

      <div className={styles.WorkHrs}>
        <p className={styles.workHrs1}>Working Hours</p>
        <p>Mon - Fri 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 7:30PM</p>
        <p>Sun: Closed</p>
      </div>
    </div>
  );
};

export default FooterMain;
