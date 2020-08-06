import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts";
import Axios from 'axios';
import Filters from './Filter';
import moment from 'moment';

const url='https://api.coindesk.com/v1/bpi/historical/close.json'
const conversionRates={
    INR:74.4563,
    EUR:0.85323,
    GBP:0.7612,
    JPY:105.59,
    USD:1
}
const fromDate=moment().subtract(1,'month').format('YYYY-MM-DD')


const Charts = (props) => {
    const [data,setData] = useState({})
    const [filterVal,setFilterVal]=useState(fromDate)

    const getData = async () =>{
        let result =  await Axios.get(url)
        result = Object.entries(result.data.bpi);
        setData(result)
    }

    useEffect( ()=>{
        getData();
    },[])

    useEffect(()=>{
        daysHandle(filterVal)
    },[props.currency,filterVal])

    const daysHandle=async(startDate)=>{
        startDate ? null : startDate=moment().subtract(1,'month').format('YYYY-MM-DD')
        let today=moment().format('YYYY-MM-DD')
        let result =  await Axios.get(url+'?start='+startDate+'&end='+today)
        result = Object.entries(result.data.bpi);
        if(props.currency){
            result.map(element=> {
                element[1] *= parseFloat(conversionRates[props.currency]);
            });
        }
        setData(result)
    }

    return (
        <div>
            <Filters filterVal={filterVal} setFilterVal={setFilterVal}/>
            <Chart
                width={700}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                ['Time', 'Price'],
                ...data
                ]}
                options={{
                title: 'Bitcoin Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '50%', height: '70%' },
                // lineWidth: 25
                }}
            />
        </div>
    )
}

export default Charts
