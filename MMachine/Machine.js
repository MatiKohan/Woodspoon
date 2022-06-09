"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MStateMachine = /** @class */ (function () {
    function MStateMachine(id, initialState, states) {
        this.id = id;
        this.currentState = initialState;
        this.states = states;
    }
    MStateMachine.prototype.reset = function () {
        this.currentState = this.initialState;
    };
    MStateMachine.prototype.state = function () {
        console.log(this.currentState);
    };
    MStateMachine.prototype.dispatch = function (event) {
        this.currentState = this.currentState.on(event);
    };
    return MStateMachine;
}());
//# sourceMappingURL=Machine.js.map