import styles from "./Developer.module.css"
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github.png";


const Developer = () => {
  return (
   <div className={styles.DeveloperEdi}>
    <p className={styles.DevelopedBy}>Developed by</p>
    <div className={styles.DeveEdition}>
    <a href="https://www.linkedin.com/in/chimmiri-pavan-kalyan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLq%2BM8WhNQfqgSfZAfXWUJw%3D%3D"> <img src={linkedin}   className={styles.linImg}  alt="linkedin" /> </a>
    <p className={styles.Pavan}>Pavan Kalyan </p>
    
    <a href="https://github.com/kalyan2003"> <img src={github} className={styles.gitImg}  alt="github" /> </a>
    </div>
   
   
   </div>
  )
}

export default Developer;