import { EventStateMap } from "./eventState";

export default abstract class MState {
  constructor(
    private id: string,
    private name: string,
    private callback?: (thisState: MState) => void,
    private eventState?: EventStateMap
  ) {}

  getStateProps() {
    return {
      id: this.id,
      name: this.name,
      callback: this.callback,
      eventState: this.eventState,
    };
  }

  getStateName() {
    return this.name;
  }

  getNextState(eventName: string): MState {
    const nextState = this.eventState?.[eventName];

    if (!nextState) {
      throw "Event not supported";
    }
    return nextState;
  }

  addEvent(eventName: string, nextState: MState): void {
    if (!this.eventState) {
      this.eventState = {};
    }

    if (this.eventState[eventName]) {
      throw "Event already exists in this state";
    }

    this.eventState[eventName] = nextState;
  }

  deleteEvent(eventName: string): void {
    if (this.eventState) {
      delete this.eventState[eventName];
    }
  }

  run(): void {
    this.callback?.(this);
  }
}
