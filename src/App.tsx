import "./styles.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Car from "./Car";
import Duck from "./Duck";
import Engine from "./Engine";
import CatEngine from "./CatEngine";
import StandardEngine from "./StandardEngine";
import CoolEngine from "./CoolEngine";
import BrokenEngine from "./BrokenEngine";
import CarTests from "./CarTests";
import DuckTests from "./DuckTests";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    /*
console.log("This is a");
multiline comment.
Got it?
Good.
*/

    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey", "there");
    const redCarEngine = new CatEngine();
    const blueCarEngine = new StandardEngine(); //new Engine(2);
    const coolEngine = new CoolEngine(); //Engine(4);
    const brokenEngine = new BrokenEngine();
    display(redCarEngine.toString());
    const redCar = new Car("red", redCarEngine);
    display(redCar.toString());
    display(redCar.miles);
    // {totalMiles: 0, color: "red", eng: redCarEngine}
    const blueCar = new Car("blue", blueCarEngine);
    const yellowCar = new Car("yellow", brokenEngine);
    yellowCar.drive(5);
    redCar.drive(40);
    redCar.drive(36);
    blueCar.drive(2);
    display("Changing Engines...");
    redCar.engine = coolEngine;
    blueCar.engine = redCarEngine;
    blueCar.drive(2);
    redCar.drive(6);
    display("Red car drove a total of:", redCar.miles, "miles");
    // blueCar.miles = 84;
    display("Blue car drove a total of:", blueCar.miles, "miles");
    display(blueCar);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
