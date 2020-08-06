import React from 'react'

const Header = (props) => {
    const {currencyData}=props
    const baseCurrency=currencyData.bpiData[currencyData.baseCurrency]
    return (
        <div className="header">
            <p className="header-light">{currencyData.bitcoins} Bitcoin Equals</p>
            <p className="content">{currencyData.currencyVal.toFixed(2)} <span>{baseCurrency && baseCurrency.description}</span></p>
            <p className="header-light">{currencyData.updated}</p>
        </div>
    )
}

const checkBaseCurrency = (prevProp,nextProp) =>{
    return prevProp.currencyData.bpiData[prevProp.currencyData.baseCurrency] && 
            prevProp.currencyData.baseCurrency == nextProp.currencyData.baseCurrency
}

export default React.memo(Header,checkBaseCurrency)
