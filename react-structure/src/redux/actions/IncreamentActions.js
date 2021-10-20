import { INCREMENT_ACTION } from "../actionsType/ActionsType"

const incrementAction = (payload) => {
    return {
        type: INCREMENT_ACTION,
        payload
    }
}

export default incrementAction;