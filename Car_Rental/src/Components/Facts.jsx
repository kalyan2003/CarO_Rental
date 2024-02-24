import styles from "./Facts.module.css";

const Facts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main2}>
        <p className={styles.Faq}>FAQ</p>
        <p className={styles.FreQues}>Frequently Asked Questions</p>
        <p className={styles.Answers}>
          Answers to common concerns and inquires
        </p>
      </div>
      <div className={styles.main3}>
      <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" href="#">Action</p></li>
           
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facts;
