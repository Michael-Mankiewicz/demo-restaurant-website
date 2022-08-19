import Navbar from "./components/navbar/Navbar";
import Socials from "./Socials";
import Home from "./components/home/Home";
import AboutUs from "./AboutUs";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderNow from "./components/order/OrderNow";
import Hours from "./components/hours/Hours";
import Directions from "./components/directions/Directions";

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/menu" element = {<Menu/>}/>
            <Route path="/order-now" element = {<OrderNow/>}/>
            <Route path="/hours-and-location" element = {<Hours/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
