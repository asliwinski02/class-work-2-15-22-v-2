import Engine from "./Engine";
import display from "./display";

class MutedEngine extends Engine {
  constructor() {
    super();
  }

  public makeNoise(): void {
    display("The engine makes no noise.");
  }
}

export default MutedEngine;
