import React from 'react'

const Header = (props) => {
    const {currencyData}=props
    const baseCurrency=currencyData.bpiData[currencyData.baseCurrency]
    return (
        <div>
            <p>{currencyData.bitcoins} Bitcoin Equals</p>
            <p>{currencyData.currencyVal} {baseCurrency && baseCurrency.description}</p>
            <p>{currencyData.updated}</p>
        </div>
    )
}

export default Header
