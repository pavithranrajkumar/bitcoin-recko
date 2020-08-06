import React, { Component } from 'react'

class BitcoinContainer extends Component {
    state={
        baseCurrency:"USD",
        bitcoins:1,
        currencyVal:1,
        updated:'',
        bpiData:{}
    }

    render() {
        return (
            <div>
                <div>
                    <p>Header</p>
                    <p>Build Controls</p>
                </div>
                <div>
                    <p>Charts</p>
                </div>
            </div>
        )
    }
}

export default BitcoinContainer
