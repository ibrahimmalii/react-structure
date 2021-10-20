import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import changeLanguageAction from '../../redux/actions/ChangeLanguageAction';

export default function ChangeLanguage() {
    const language = useSelector((state)=> state.currentLanguage);
    const disPatch = useDispatch();
    
    const handleChangeLanguage = ()=>{
        disPatch(changeLanguageAction(language === 'ar' ? 'en' : 'ar'));
    }

    return (
        <div>
           <button className="btn btn-danger" onClick={handleChangeLanguage}>Change Language</button> 
           <h1>{language}</h1>
        </div>
    )
}
