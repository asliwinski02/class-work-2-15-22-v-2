import display from "./display";
import IDrivable from "./IDrivable";
import Engine from "./Engine";

/** Class representing a car. */
class Car {
  private totalMiles: number;
  private color: string;
  private eng: Engine;

  /**
   * Create a car.
   * @param carColor - The color of the Car.
   * @param e - The initial engine for the Car.
   */
  constructor(carColor: string, e: Engine) {
    this.totalMiles = 0;
    this.color = carColor;
    this.eng = e; //new Engine(Math.floor(Math.random() * 4));
  }

  /**
   * Drives the car for the given number of miles.
   * @param miles - The number of miles to drive the Car.
   */
  public drive(miles: number) {
    // display("The", this.color, "car drives", this.miles, " miles.");
    display("The", this.color, "car drives", this.miles, " miles.");
    this.eng.makeNoise();
    this.totalMiles = this.totalMiles + miles;
  }

  /**
   * total number of miles driven by Car
   */

  public get miles(): number {
    //string {
    //return this.totalMiles + " miles ";
    return this.totalMiles;
  }

  /**
   * the new engine to replace
   */
  public set engine(e: Engine) {
    this.eng = e;
  }

  /**
   * Produces string representation of Car
   * @return string representation of Car
   */
  toString() {
    return this.color + " Car that drove " + this.totalMiles;
  }

  /*
  set miles(newTotalMiles: number) {
    throw new Error("Attempted to set miles.");
    if (newTotalMiles >= 0) {
      this.totalMiles = newTotalMiles;
    } else {
      display("Disregarding attempt to set miles to negative number");
    }
  }
  */
}

export default Car;
