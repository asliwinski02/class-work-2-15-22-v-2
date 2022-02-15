import Engine from "./Engine";
import Car from "./Car";

const driveCars = (times: number) => {
  const greenCar = new Car("green", new Engine(1));
  const maroonCar = new Car("maroon", new Engine(2));
  let totalMiles = 0;

  for (let i = 0; i < times; i++) {
    const numMiles1 = Math.floor(Math.random() * 100);
    const numMiles2 = Math.floor(Math.random() * 100);
    greenCar.drive(numMiles1);
    maroonCar.drive(numMiles2);
    greenCar.drive(5);
    totalMiles += numMiles2;
  }

  return { actual: maroonCar.miles, expected: totalMiles };
};

describe("Car", () => {
  it("has a working getter for miles", function () {
    const c = new Car("red", new Engine(1));
    expect(c.miles).toBeDefined();
  });
  it("drives correctly", function () {
    let c1 = new Car("red", new Engine(1));
    let c2 = new Car("blue", new Engine(1));
    c1.drive(10);
    c2.drive(4);
    c1.drive(5);
    expect(c1.miles).toBe(15);
    expect(c2.miles).toBe(4);
  });

  const tests = [0, 3, 10].map((num, index) => driveCars(num));

  const testDescriptions = [
    "starts with the correct miles of 0",
    "has the correct number of miles after 3+ random drives",
    "has the correct number of miles after 10+ random drives"
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toBe(tests[index].actual)
    );
  });

  it("can be converted to a string with a color", function () {
    let carColor = "green";
    let c1 = new Car(carColor, new Engine(2));
    c1.drive(3);
    expect(c1.toString()).toContain(carColor);
  });
});
