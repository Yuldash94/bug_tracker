import React from 'react'
import {BsSearch, BsPlusLg} from 'react-icons/bs'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Header.css'
function Header() {

  const options = [
    'Polygon', 'Polygon', 'Polygon'
  ];
  return (
    <header>
        <div className='logo'>
            <img src='./img/logo_denet.png' alt=''/>
            <span>
            .bug tracker
            </span>
        </div>
        <div className='user'>
            <div className='search'>
                <BsSearch/>
            </div>
            <div className='dropdown'>
            <Dropdown options={options} placeholder="Polygon" />
            </div>
            <div className='balance'>
                <p>Used: <span>0.4 GB</span></p>
                <span className='line'/>
                <p>Balance: <span>0.6 TBY</span></p>
                <BsPlusLg style={{color: '#FFD600', fontSize: '18px'}}/>
            </div>
            <div className='avatar' style={{background: `url('./img/avatar.png')`}}>
            </div>
        </div>
    </header>
  )
}

export default Header