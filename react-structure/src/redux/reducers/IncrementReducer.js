const INITIAL_STATE = {
    counter: 0
}

const incrementReducer = (state = INITIAL_STATE.counter, { type, payload }) => {
    switch (type) {
        case 'INCREMENT_ACTION':
            return {
                ...state,
                counter: payload
            }
            break;

        default:
            break;
    }
}

export default incrementReducer;

