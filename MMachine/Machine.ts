import MState from './State';
import State from './State';
class MStateMachine {
    id: string
    initialState: State;
    protected currentState: State;
    states: MState[];

    constructor(id: string, initialState: State, states: MState[] ){
        this.id = id;
        this.currentState = initialState;
        this.states = states;
    }

    reset(){
        this.currentState = this.initialState;
    }

    state(){
        console.log(this.currentState);       
    }

    dispatch(event: string){
        
        this.currentState = this.currentState.on(event);
    }
}