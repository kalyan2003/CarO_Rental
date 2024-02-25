import styles from "./Facts.module.css";
import Dropdown from "./dropdown";
const Facts = () => {
  const arr = [
    {
      id: 1,
      title: "l. What is special about comparing rental car deals?",
      desc: "Comparing rental Car deals is important as it helps find the bestdeal that fts your budget and requirements ensuring you get the most value for your money, By companng various options. you can find deals that affer lower prices. additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      id: 2,
      title: "2. How do I find the car rental deals?",
      desc: "You can find car rental deals by researching online and comparing prices from different rental companies- Websites such as Exped•a, kayak. and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      id: 3,
      title: "3. How do I find such low rental car prices?",
      desc: "Book in advance: Booking your rental car ahead of time can often result in lower pnces,Compare prices from multiple companies: Use websites like Kayak. Expedia- or Travelocity to compare prices from multiple. rental car companies, for discount codes and coupons: Search for discount codes and coupons that you Can use to lower the rental price, Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

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
        {arr.map((obj) => {
          return <Dropdown key={obj.id} title={obj.title} desc={obj.desc} />;
        })}
      </div>
    </div>
  );
};

export default Facts;
