import display from "./display";

// place your code on line 4 above the export statement below

// in Engine.ts
class Engine {
  private engineType: number;

  constructor() {
    //this.engineType = engineType;
  }

  public makeNoise() {
    display("The engine makes a default noise.");
  }

  toString() {
    // overrides Object class's [object Object], Engine inherits from Object
    return "Engine";
  }
}

export default Engine;
