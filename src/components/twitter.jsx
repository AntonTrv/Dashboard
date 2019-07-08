import React from 'react';

const Twitter =({followers}) => {
    return(
        <div className='item small-item'>
            <h3>Twitter Followers</h3>
            <span>{followers}</span>
        </div>
    )
}

export default Twitter;
