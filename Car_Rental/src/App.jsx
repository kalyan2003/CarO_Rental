
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header_car from './Components/HeaderCar';
import Home_page from './Components/Home_page';
import Quick from './Components/Quick';
import RentalFleet from './Components/RentalFleet';

function App() {

  return (
    <>
    <Header_car/>
    <Home_page/>
    <Quick/>
  <RentalFleet></RentalFleet>
    </>
  )
 
}

export default App
