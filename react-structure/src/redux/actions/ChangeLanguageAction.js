import { CHANGE_LANGUAGE } from "../actionsType/ActionsType";


const changeLanguageAction = (payload) => {
    return {
        'type': CHANGE_LANGUAGE,
        payload,
    };
};

export default changeLanguageAction;