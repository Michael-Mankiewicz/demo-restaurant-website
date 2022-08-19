import './Hours.css'
import front from "./villapizzafront.png";
const Hours = () => {
    return (
        <div className="hourspage">
            
            <img src={front} alt="" />
            <div className="location">
                <h2>1600 Pennsylvania Avenue NW, Washington, DC 20500</h2>
            </div>
            <div className="hours">
                <div className="hour"> <h2>Monday</h2><h2>7-8</h2></div>
                <div className="hour"> <h2>Tuesday</h2><h2>7-8</h2></div>
                <div className="hour"> <h2>Wednesday</h2><h2>7-8</h2></div>
                <div className="hour"> <h2>Thursday</h2><h2>7-8</h2></div>
                <div className="hour"> <h2>Friday</h2><h2>7-8</h2></div>
                <div className="hour"> <h2>Saturday</h2><h2>9-7</h2></div>
                <div className="hour"> <h2>Sunday</h2><h2>9-7</h2></div>
            </div>
        </div>
    );
}
 
export default Hours;