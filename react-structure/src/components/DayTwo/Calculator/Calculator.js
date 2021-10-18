import React, { useState } from 'react'
import CalculatorStyle from './Calculator.css'

export default function Calculator() {

    const [calculatorList, setCalculatorList] = useState({
        result: ''
    })

    const newArr = []
    const handleCalculate = (e) => {

        setCalculatorList({
            result: calculatorList.result + e.target.value
        })

    }

    const calculateEquation = (e) => {
        switch (e.target.value) {
            case '=':
                setCalculatorList({ result: eval(calculatorList.result).toString() })
                break;
            case 'C':
                setCalculatorList({ result: '' })
                break;
            case 'Del': 
                setCalculatorList({result : calculatorList.result.substring(0, calculatorList.result.length -1)})
            default:
                break;
        }
    }


    return (
        <>
            <div class="main">

                <form name="form">
                    <input type="text" value={calculatorList.result} name="textview" className="textview" />
                </form>

                <div class="clearfix">
                    <div class="col-3"><input type="button" value="C" class="button top-button" onClick={calculateEquation} /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="&#8756;" class="button top-button" /></div>
                    <div class="col-3"><input type="button" value="Del" class="button top-button" onClick={calculateEquation} /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="/" class="button operator" /></div>
                </div>

                <div class="clearfix">
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="7" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="8" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="9" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="*" class="button operator" /></div>
                </div>

                <div class="clearfix">
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="4" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="5" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="6" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="-" class="button operator" /></div>
                </div>

                <div class="clearfix">
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="1" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="2" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="3" class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="&#43;" class="button plus operator" /></div>
                </div>

                <div class="clearfix">
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="." class="button" /></div>
                    <div class="col-3"><input type="button" onClick={handleCalculate} value="0" class="button" /></div>
                    <div class="col-6"><input type="button" onClick={calculateEquation} value="&#61;" class="button equal" /></div>
                </div>

            </div>

        </>
    )
}

