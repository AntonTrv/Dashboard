import React from 'react';
import {VictoryPie} from 'victory';
const Youtube =({youtube}) => {
    const data = youtube.age.map(el => el);
    console.log(data)

    return(
        <div className='item small-item'>
            <h3>Youtube subscribers</h3>
            <span></span>
            <VictoryPie data={data} colorScale={["tomato", "orange", "cyan", "navy" ]}/>
        </div>
    )
}

export default Youtube;
