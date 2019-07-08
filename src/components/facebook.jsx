import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

const Facebook =({facebook}) => {
    const dynamics = facebook.followers.map((el,i) => ({day:i,subscribers: el}));
    console.log(dynamics)
    return(
        <div className='item small-item'>
            <h3>Facebook followers</h3>
            <span></span>
            <VictoryChart
                domainPadding={{ x: 50 }}
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["day 1", "day 2", "day 3", "day 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 1000}k`)}
                />
            <VictoryBar data={dynamics} x='day' y='subscribers'/>

            </VictoryChart>
        </div>
    )
}

export default Facebook;
