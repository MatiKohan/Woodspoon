import MStateMachine from "../mmachine/machine";
import MState from "../mmachine/state";
import State from "./state";

//callback - prints event1 happens 3 times in a row
const printThirdEvent = (state: MState) => {
  console.log("event1 was called 3 times in a row!!!");
};

//callback - prints running state
const printState = (state: MState) => {
  console.log(`${state.getStateName()} in now running`);
};

//New state that prints if event occurs 3 times
const state3 = new State("3", "third-state", printThirdEvent);

//New state that prints his name and if event1 is called it moves to state 3
const state2 = new State("2", "second-state", printState, {
  event1: state3,
});

//New state that prints his name and if event1 is called it moves to state 2
const state1 = new State("1", "first-state", printState, {
  event1: state2,
});

//add event to state3
state3.addEvent("event1", state1);

//creates new machine
const machine = new MStateMachine("1", state1, [state1, state2, state3]);

const backupFileName = "backup.txt";
machine.dispatch("event1");
machine.dispatch("event1");
machine.shutDown(backupFileName);

setTimeout(() => {}, 3000);

machine.reload(backupFileName);
setTimeout(() => {}, 3000);
machine.dispatch("event1");
machine.dispatch("event1");
