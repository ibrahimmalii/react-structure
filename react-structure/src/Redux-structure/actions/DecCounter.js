import { DEC_COUNTER } from "../actions-type/Types"


export const decCounterActions = (payload) => {
    return{
        type: DEC_COUNTER,
        payload
    }
}