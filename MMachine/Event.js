"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MEvent = /** @class */ (function () {
    function MEvent(name) {
        this.name = name;
        this.timeStamp = new Date();
    }
    MEvent.prototype.increaseCount = function () {
        this.counter++;
    };
    return MEvent;
}());
exports.default = MEvent;
//# sourceMappingURL=Event.js.map