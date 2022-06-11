"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var machine_1 = require("../mmachine/machine");
var state_1 = require("./state");
//callback - prints event1 happens 3 times in a row
var printThirdEvent = function (state) {
    console.log("event1 was called 3 times in a row!!!");
};
//callback - prints running state
var printState = function (state) {
    console.log(state.getStateName() + " in now running");
};
//New state that prints if event occurs 3 times
var state3 = new state_1.default("3", "third-state", printThirdEvent);
//New state that prints his name and if event1 is called it moves to state 3
var state2 = new state_1.default("2", "second-state", printState, {
    event1: state3,
});
//New state that prints his name and if event1 is called it moves to state 2
var state1 = new state_1.default("1", "first-state", printState, {
    event1: state2,
});
//add event to state3
state3.addEvent("event1", state1);
//creates new machine
var machine = new machine_1.default("1", state1, [state1, state2, state3]);
var backupFileName = "backup.txt";
machine.dispatch("event1");
machine.dispatch("event1");
machine.shutDown(backupFileName);
setTimeout(function () { }, 3000);
// const lala = async () => {
//   await machine.reload(backupFileName);
// };
machine.reload(backupFileName);
setTimeout(function () { }, 3000);
machine.dispatch("event1");
machine.dispatch("event1");
//# sourceMappingURL=app.js.map