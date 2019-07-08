import React,{useState} from 'react';

const Advertisement = ({name}) => {


    return(
        <div className='item medium-item'>
            <span>Check it out</span>
            <span>{name}</span>
        </div>
    )
}

export default Advertisement;
