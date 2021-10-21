import { CHANGE_LANGUAGE } from "../actions-type/Types"


export const changeLanguageAction = (payload) => {
    return{
        type: CHANGE_LANGUAGE,
        payload
    }
}