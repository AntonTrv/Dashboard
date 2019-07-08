import React from 'react';

const LinkedIn =({followers}) => {
    return(
        <div className='item small-item'>
            <h3>LinkedIn Followers</h3>
            <span>{followers}</span>
        </div>
    )
}

export default LinkedIn;
