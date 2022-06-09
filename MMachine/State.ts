import { EventState } from "./EventState";

export default abstract class MState{
    value: string;
    eventState: EventState[];
    
    constructor(value: string, eventState: EventState[]){
        this.value = value;
        this.eventState = eventState;
    }

    on(event: string){
        this.eventState[event].increaseCount();
        return this.eventState[event];
    }
}   