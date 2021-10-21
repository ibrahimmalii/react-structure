const INITIAL_STATE = {
    counter: 12
}

export const counterReducer = (state = INITIAL_STATE, {type, payload}={}) => {
    switch (type) {
        case 'INC_COUNTER':
            console.log('type')
            return {
                ...state,
                counter: payload
            }

        case 'DEC_COUNTER':
            return {
                ...state,
                counter: payload
            }

        default:
            return state;
    }
}
