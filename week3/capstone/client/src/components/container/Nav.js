import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Nav(){
    // const {logout, token} = useContext(UserContext)

    return (
        <div>
            <header>
                <Link to='/Home'>
                    <img src={logo} alt='davenport logo' id='logo' className='nav'/>
                </Link>
                <Link className='nav'>Sofas</Link>
                <Link className='nav'>Ottomans</Link>
                <Link className='nav'>Tables</Link>
            </header>
        </div>
    )
}