import Engine from "./Engine";
import IEngine from "./IEngine";
import display from "./display";

class CatEngine implements IEngine {
  constructor() {
    // calls constructor of parent class
  }
  public makeNoise(): void {
    display("The engine goes PUUUURRRR....");
  }

  public toString() {
    return "Cat Engine";
  }
}

export default CatEngine;
