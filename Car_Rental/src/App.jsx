import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header_car from "./Components/HeaderCar";
import Home_page from "./Components/Home_page";
import Quick from "./Components/Quick";
import RentalFleet from "./Components/RentalFleet";
import SaveBig from "./Components/SaveBig";
import Car3Component from "./Components/Car3component";
import Testimonials from "./Components/Testimonials";
import Facts from "./Components/Facts";

function App() {
  
  return (
    <>
      <Header_car />
      <Home_page />
      <Quick />
      <RentalFleet></RentalFleet>
      <SaveBig></SaveBig>
      <Car3Component></Car3Component>
      <Testimonials></Testimonials>
      <Facts></Facts>
    </>
  );
}

export default App;
