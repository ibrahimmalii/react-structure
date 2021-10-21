import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decCounterActions } from '../../Redux-structure/actions/DecCounter'
import { incCounterActions } from '../../Redux-structure/actions/IncCounter'

export default function Counter() {

    const counter = useSelector(state=>state.counterReducer.counter)
    console.log(counter)
    const dispatch = useDispatch();


    const incCounter = () => {
        dispatch(incCounterActions(counter + 1))
    }

    const decCounter = ()=>{
        dispatch(decCounterActions(counter-1))
    }


    return (
        <>
            <h1>This is counter</h1>
            <span className="fw-bold h3 text-light">{counter}</span>
            <button onClick={incCounter} className="btn btn-primary mx-3">Increment</button>
            <button onClick={decCounter} className="btn btn-primary">Decrement</button>
        </>
    )
}
