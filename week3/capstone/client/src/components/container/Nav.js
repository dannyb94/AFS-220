import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Icon } from '@iconify/react';


export default function Nav(){
//     // const {logout, token} = useContext(UserContext)

    return (
        <div>
            <header>
                <Link to='/Home' className='nav'>
                    <img src={logo} alt='davenport logo' id='logo'/>
                </Link>
                <Link to='/Sofas' className='nav'>Sofas</Link>
                <Link to='/Ottomans' className='nav'>Ottomans</Link>
                <Link to='/Tables' className='nav'>Tables</Link>
                <span id='navRight'>
                    <Link to='/Tables' id='bag' className='nav'>Bag()</Link>
                    <Link to='/User' className='nav'>
                        <Icon icon="carbon:user-filled" height="22" alt='user icon' id='icon'/>
                    </Link>
                </span>
            </header>
        </div>
    )
}

