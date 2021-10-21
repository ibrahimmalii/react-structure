import { INC_COUNTER } from "../actions-type/Types"


export const incCounterActions = (payload) => {
    return{
        type: INC_COUNTER,
        payload
    }
}