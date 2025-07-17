import {LOGO_URL} from '../utils/constants'; //named import
import { use, useState } from 'react'; //named import
//it is possible to have named export and default export in the same file
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'; //custom hook to check online status

export const Header = () => {
    const [btnClicked, setBtnClicked] = useState('Login'); 
    const isOnline = useOnlineStatus(); //custom hook to check online status
    return (
        <div className='header'>
            <div className='navbar'> 
                <img id='logo' src={LOGO_URL}></img>    
                <div className='links'>
                    <ul>
                        <li>Status : {isOnline? '🟢': '🔴'}</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                        <li><Link to='/grocery'>Grocery</Link></li>
                        <button className='login_btn'
                        onClick={() => {
                            if(btnClicked === 'Logout'){
                                setBtnClicked('Login');
                            }
                            else{
                                setBtnClicked('Logout');
                            }
                        }}>{btnClicked}</button>
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default Header;