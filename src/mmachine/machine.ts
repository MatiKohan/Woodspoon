import MState from "./state";
import * as fs from "fs";
import { StatesMap } from "./states";

export default class MStateMachine {
  protected currentState: MState;
  protected states: StatesMap;

  constructor(
    private id: string,
    private initialState: MState,
    states: MState[]
  ) {
    this.states = {};
    states.forEach((state) => (this.states[state.getStateName()] = state));
    this.start();
  }

  restart(): void {
    this.start();
  }

  getCurrentState(): MState {
    return this.currentState;
  }

  dispatch(event: string): void {
    if (this.currentState) {
      const nextState = this.currentState.getNextState(event);
      if (nextState) {
        this.currentState = nextState;
        this.currentState?.run();
      }
    }
  }

  start(): void {
    this.currentState = this.initialState;
    console.log(`Machine started`);
    this.currentState.run();
  }

  shutDown(fileName: string): void {
    const content = this.currentState.getStateName();
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error(err);
      }
    });

    console.log("Shutting down");
    this.currentState = null;
  }

  reload(fileName: string) {
    const data = fs.readFileSync(fileName, { encoding: "utf8" });

    if (data && this.states[data]) {
      console.log("Reloading from backup...");
      this.states[data].run();
    } else {
      console.log("Backed up state not found");
      this.initialState.run();
    }

    fs.unlink(fileName, (err) => {
      if (err) throw err;
    });
  }
}
