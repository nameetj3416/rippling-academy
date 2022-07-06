import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOnOutlined';
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import { CardTravel, LocationOnOutlined } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
{/*
    https://api.postalpincode.in/pincode/110001
*/ }
function Header() {
    const [{cart},dispatch]=useStateValue();
    const handleFilter=()=>{

    }
  return (
    <nav className='header'>
        {/* logo */}
        <Link to='/'>
            <img className='header__logo' src='./e-commerce_logo.jpeg'></img>
        </Link>
        
        {/* address selector */}
        <div className='header__filter'>
            <p>Filter</p>
            <FilterListSharpIcon className='header__filterIcon' onClick={handleFilter}/>
        </div>
        

        <div className='header__search'>
            <input className='header__searchInput'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        
        <div className='header__nav'>
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__lineOne'>Hello NJ</span>
                    <span className='header__lineTwo'>Sign In</span>
                </div>
            </Link>
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__lineOne'>Returns</span>
                    <span className='header__lineTwo'>& Orders</span>
                </div>
            </Link>
            <Link to='/checkout' className='header__link'>
                <div className='header__cart'>
                    <ShoppingCartOutlinedIcon className='header__shoppingCart'/>
                    <span className='header__lineTwo header__cartCount'>{cart.length}</span>
                </div>
            </Link>
        </div>


    </nav>
  )
}

export default Header