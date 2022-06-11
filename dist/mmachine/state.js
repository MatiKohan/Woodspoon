"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MState = /** @class */ (function () {
    function MState(id, name, callback, eventState) {
        this.id = id;
        this.name = name;
        this.callback = callback;
        this.eventState = eventState;
    }
    MState.prototype.getStateProps = function () {
        return {
            id: this.id,
            name: this.name,
            callback: this.callback,
            eventState: this.eventState,
        };
    };
    MState.prototype.getStateName = function () {
        return this.name;
    };
    MState.prototype.getNextState = function (eventName) {
        var _a;
        var nextState = (_a = this.eventState) === null || _a === void 0 ? void 0 : _a[eventName];
        if (!nextState) {
            throw "Event not supported";
        }
        return nextState;
    };
    MState.prototype.addEvent = function (eventName, nextState) {
        if (!this.eventState) {
            this.eventState = {};
        }
        if (this.eventState[eventName]) {
            throw "Event already exists in this state";
        }
        this.eventState[eventName] = nextState;
    };
    MState.prototype.deleteEvent = function (eventName) {
        if (this.eventState) {
            delete this.eventState[eventName];
        }
    };
    MState.prototype.run = function () {
        var _a;
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, this);
    };
    return MState;
}());
exports.default = MState;
//# sourceMappingURL=state.js.map