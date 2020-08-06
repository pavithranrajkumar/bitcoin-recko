import React, { Component } from 'react'
import Axios from 'axios'
import Header from '../components/header/Header'

class BitcoinContainer extends Component {
    state={
        baseCurrency:"USD",
        bitcoins:1,
        currencyVal:1,
        updated:'',
        bpiData:{}
    }

    getCurrencyData = async(baseCurrency) =>{
        const currency=baseCurrency || this.state.baseCurrency
        let {data} =await Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        this.setState(prevState=>({
            baseCurrency:currency,
            bpiData:data.bpi,
            updated:data.time.updated
        })
        )
    }

    componentDidMount = () =>{
        this.getCurrencyData();
    }

    render() {
        return (
            <div>
                <div>
                    <Header currencyData={this.state}/>
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
