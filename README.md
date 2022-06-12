# Woodspoon
State-Machines framework

# Machine
**Properties**

id - Machine's id.

initialState: MState - Initial state of the machine.

states: MState[] - Array of states.

**Methods**

getCurrentState() - Returns the current state.

dispatch(eventName) - Dispatches an event.

restart() - Begin the machine from the beginning.

shutdown(fileName) - Shuwdowns the machine and saves the last state.

reload(fileName) - Starts the machine from the last state.

# State (abstract)

**Properties**

id - States's id.

name - State's name.

callback(state) - Callback to run when state is called.

eventState - Map of event names to next state.

**Methods**

getStateName() - Returns state's name.

getNextState() - Returns next state.

addEvent(event, nextState) - Adds event-state object to states array.
 
deleteEvent(eventName) - Deletes event-state object from states array.

run() - Runs state callback.
# Machine (abstract)

**Properties**

name - Event's name.

# Structure

MMachine - (Matias Machine) - Framework for building state machines

Assignment2 - Machine that prints a text message when it detects that the same type of event has been fired 3 times in a row. 

Assignment3 - Support persistency (Not finished)

# Usage

Assignment2

node dist/assignment2/app.js

Assignment3 

node dist/assignment3/app.js
