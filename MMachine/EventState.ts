import MState from './State';
import MEvent from './Event';

export type EventState = {
    event: MEvent,
    state: MState
}