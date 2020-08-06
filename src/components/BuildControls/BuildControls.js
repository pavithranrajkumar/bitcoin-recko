import React from 'react'

const BuildControls = (props) => {
    const currencies=Object.entries(props.bpiData)
            .map(currency=><option key={currency[0]} value={currency[0]}>{currency[1].description}</option>)
    return (
        <div>
            <div className="control-group">
                <input type="number" class="form-control" name="bitcoins" value={props.bitcoins} onChange={(e)=>props.bitCoinsHandler(e.target.value)}/>
                <select name="bitcoin" class="form-control">
                    <option value="bitcoin">Bitcoin</option>
                </select>
            </div>
            <div className="control-group">
                <input type="number" name="currencyVal" class="form-control" value={props.currencyVal} onChange={(e)=>props.currencyValHandler(e.target.value)}/>
                <select name="currencies" class="form-control" onChange={(e)=>props.baseCurrencyHandler(e.target.value)}>
                    {currencies}
                </select>
            </div>
        </div>
    )
}

export default BuildControls
