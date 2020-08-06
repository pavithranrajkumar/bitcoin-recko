import React from 'react'

const Header = (props) => {
    const {currencyData}=props
    const baseCurrency=currencyData.bpiData[currencyData.baseCurrency]
    return (
        <div class="header">
            <p class="header-light">{currencyData.bitcoins} Bitcoin Equals</p>
            <p class="content">{currencyData.currencyVal} <span>{baseCurrency && baseCurrency.description}</span></p>
            <p class="header-light">{currencyData.updated}</p>
        </div>
    )
}

const checkBaseCurrency = (prevProp,nextProp) =>{
    return prevProp.currencyData.bpiData[prevProp.currencyData.baseCurrency] && 
            prevProp.currencyData.baseCurrency == nextProp.currencyData.baseCurrency
}

export default React.memo(Header,checkBaseCurrency)
