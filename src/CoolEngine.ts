import Engine from "./Engine";
import display from "./display";

class CoolEngine extends Engine {
  constructor() {
    super();
  }

  public makeNoise(): void {
    display("The engine goes SOOOOMMMMMEEECOOOOOLLLLSSSOOOOUUUUNNNDDD......");
  }

  toString() {
    return "Cool Engine";
  }
}

export default CoolEngine;
