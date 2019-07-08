import React, {useState, useEffect} from 'react';
import Header from './components/header.jsx';
import Preloader from './components/preloader.jsx';

import Main from "./components/main";
import './App.scss';


const App = () => {

  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/data')
          .then(response => response.json())
          .then(data => setInfo(data)
  )}, [])


  const menuButton = (e) => {
    let menu = document.querySelector('nav');
    let main = document.querySelector('main');
    let app = document.querySelector('.main-wrapper');

    if(menu.classList.contains('visible')){
      menu.classList.remove('visible');
      main.classList.remove('calc-menu-width');
      app.style.position=('static')
    }else{
      menu.classList.add('visible');
      main.classList.add('calc-menu-width');
      app.style.position=('fixed')
    }
  }

  if(!info.facebook) {
    return (
        <Preloader/>
    )

  }else{
      return (
          <div className="App">
            <Header handleClick={menuButton}/>
            <Main info={info}/>
          </div>
      );

  }
  }


export default App;
