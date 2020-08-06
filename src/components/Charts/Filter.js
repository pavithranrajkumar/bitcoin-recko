 
import React from 'react'
import moment from 'moment'

const filterValues=[  
    {label:"30 D",val:1},
    {label:"5 M",val:5},
    {label:"1 Y",val:12},
    {label:"5 Y",val:60}
]


const filters = (props) => {
    const filters=filterValues
        .map(filter=>{
            let fromDate=moment().subtract(filter.val,'months').format('YYYY-MM-DD')
            return <button class="btn btn-outline-secondary" key={filter.val} onClick={()=>props.setFilterVal(fromDate)} >{filter.label}</button>
        })
    return (
        <div class="filters">
            {filters}
        </div>
    )
}

export default filters