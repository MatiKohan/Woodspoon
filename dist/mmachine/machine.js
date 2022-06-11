"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var MStateMachine = /** @class */ (function () {
    function MStateMachine(id, initialState, states) {
        var _this = this;
        this.id = id;
        this.initialState = initialState;
        this.states = {};
        states.forEach(function (state) { return (_this.states[state.getStateName()] = state); });
        this.start();
    }
    MStateMachine.prototype.restart = function () {
        this.start();
    };
    MStateMachine.prototype.getCurrentState = function () {
        return this.currentState;
    };
    MStateMachine.prototype.dispatch = function (event) {
        var _a;
        if (this.currentState) {
            var nextState = this.currentState.getNextState(event);
            if (nextState) {
                this.currentState = nextState;
                (_a = this.currentState) === null || _a === void 0 ? void 0 : _a.run();
            }
        }
    };
    MStateMachine.prototype.start = function () {
        this.currentState = this.initialState;
        console.log("Machine started");
        this.currentState.run();
    };
    MStateMachine.prototype.shutDown = function (fileName) {
        var content = this.currentState.getStateName();
        fs.writeFile(fileName, content, function (err) {
            if (err) {
                console.error(err);
            }
        });
        console.log("Shutting down");
        this.currentState = null;
    };
    MStateMachine.prototype.reload = function (fileName) {
        var data = fs.readFileSync(fileName, { encoding: "utf8" });
        if (data && this.states[data]) {
            console.log("Reloading from backup...");
            this.states[data].run();
        }
        else {
            console.log("Backuped state not found");
            this.initialState.run();
        }
        fs.unlink(fileName, function (err) {
            if (err)
                throw err;
        });
    };
    return MStateMachine;
}());
exports.default = MStateMachine;
//# sourceMappingURL=machine.js.map