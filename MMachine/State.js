"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MState = /** @class */ (function () {
    function MState(value, eventState) {
        this.value = value;
        this.eventState = eventState;
    }
    MState.prototype.on = function (event) {
        this.eventState[event].increaseCount();
        return this.eventState[event];
    };
    return MState;
}());
exports.default = MState;
//# sourceMappingURL=State.js.map