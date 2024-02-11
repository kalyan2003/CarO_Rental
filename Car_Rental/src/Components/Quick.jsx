/* eslint-disable react/no-unescaped-entities */
import styles from './Quick.module.css';
import { FaCarOn } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";

const Quick = () => {
return (

 <div>
  <p className={`${styles.quickRes} `}>Quick AND easy rental</p>
  <div className={`${styles.QuickResIcons} row`}>
    <div className={`${styles.icon1} col `}>
      <FaCarOn  className={styles.iconIco1}/>
      <p className={styles.pquick}>Select car</p>
      <p className={styles.pquick2}>We offers a big range of vehicles for all
your dnving needs, We have the
perfect car to meet your needs</p>

    </div>
    <div className={`${styles.icon2} col`}>
      
      <FcOnlineSupport className={styles.iconIco1}/>
      
      <p className={styles.contac}>Contact Operator</p>
      <p className={styles.contac2}>Our knowledgeable and friendly
operators are always ready to help
with any questions or concerns</p>

    </div>
    <div className={`${styles.icon3} col`}>
      
      <FaCarSide className={styles.iconIco1}/>
       <p className={styles.LetsDrive}> Lets Drive</p>
       <p className={styles.LetsDrive2}> Whether you're hitting the open road.we've got you covered With our Wide
range of cars</p>
      
      </div>
  </div>
 </div>


);

}

export default Quick;