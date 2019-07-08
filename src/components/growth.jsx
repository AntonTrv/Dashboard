import React from 'react';

const Growth = ({data}) => {
    let youtube = data.youtube.subscribers - data.youtube.lastDay;
    let facebook = data.facebook.followers[data.facebook.followers.length - 1] - data.facebook.followers[data.facebook.followers.length - 7];
    let linkedIn = data.linkedIn.followers - data.linkedIn.lastDay;
    let twitter = data.twitter.followers - data.twitter.lastDay;
    return(
        <div className ='item small-item'>
            <h3>Growth last week</h3>
            <span>+ {youtube+facebook+linkedIn+twitter} followers</span>
        </div>
    )
}

export default Growth;
