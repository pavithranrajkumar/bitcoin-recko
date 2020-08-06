import React, { Component } from 'react'
import Axios from 'axios'
import Header from '../components/Header/Header'
import BuildControls from '../components/BuildControls/BuildControls'
import Charts from '../components/Charts/Charts'

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
            currencyVal:prevState.bitcoins*data.bpi[currency].rate_float,
            bpiData:data.bpi,
            updated:data.time.updated
        })
        )
    }

    componentDidMount = () =>{
        this.getCurrencyData();
    }

    bitCoinsHandler = (bitcoins) =>{
        let rate=this.state.bpiData[this.state.baseCurrency].rate_float
        let currencyVal=bitcoins*rate
        this.setState({
            bitcoins,
            currencyVal
        })
    }

    currencyValHandler = (currencyVal) =>{
        let rate=this.state.bpiData[this.state.baseCurrency].rate_float
        let bitcoins=currencyVal/rate
        this.setState({
            bitcoins,
            currencyVal
        })
    }

    baseCurrencyHandler = (baseCurrency) =>{
        this.getCurrencyData(baseCurrency)
    }

    render() {
        return (
            <div>
                <div>
                    <Header currencyData={this.state}/>
                    <BuildControls 
                            bpiData={this.state.bpiData} 
                            bitcoins={this.state.bitcoins} 
                            currencyVal={this.state.currencyVal}
                            bitCoinsHandler={this.bitCoinsHandler}
                            currencyValHandler={this.currencyValHandler}
                            baseCurrencyHandler={this.baseCurrencyHandler}/>
                </div>
                <div>
                    <Charts currency={this.state.baseCurrency}/>
                </div>
            </div>
        )
    }
}

export default BitcoinContainer
