import React from 'react';
import './css/main.scss';
import Menu from './menu.jsx';
import Facebook from "./facebook";
import Youtube from './youtube.jsx'
import Visitors from "./visitors";
import Ranking from "./ranking";
import Growth from "./growth";
import Trust from "./trust";
import LinkedIn from "./linkedin";
import Twitter from "./twitter";
import Dynamics from "./dynamics";
import Age from "./age";
import Advertisement from "./advertisement";

const Main = ({info}) => {

    return(
       <div className='main-wrapper'>
            <Menu/>

            <main>

                <div className='main-content-container'>

                    <div className='small-items-container'>
                    <Facebook facebook={info.facebook} />
                    <Youtube youtube={info.youtube}/>
                    </div>

                    <Visitors/>
                    <Ranking/>

                    <div className='small-items-container'>
                    <Growth data={info}/>
                    <Trust/>
                    </div>

                </div>

                <div className='main-content-container'>
                    <div className='small-items-container'>
                        <LinkedIn followers={info.linkedIn.followers}/>
                        <Twitter followers={info.twitter.followers}/>
                    </div>
                    <Dynamics/>
                    <Age/>
                    <Advertisement name={info.name}/>
                </div>

            </main>

       </div>


    )
}

export default Main;
