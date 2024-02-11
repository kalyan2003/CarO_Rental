import Car_logo from '/src/assets/Car_logo.png'
import styles from './HeaderCar.module.css'



const HeaderCar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      
      <img  className={styles.img_logo} src={Car_logo} alt="Car_logo" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#">About</a>
          </li>
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#">Vehicle Models</a>
          </li>
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#">Testimonials</a>
          </li>
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#">Our Team</a>
          </li>
          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#">Contact</a>
          </li>

          <li className={`nav-item ${styles.head_items}`}>
            <a className="nav-link active" href="#"><button className={styles.button_1}>Login</button></a>
          </li>

          <li className={`nav-item ${styles.head_items}`}>
          <a className="nav-link active" href="#"><button className={styles.button_2}>Register</button></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default HeaderCar;