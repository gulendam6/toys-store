import React, {useRef} from 'react';
import './header.css';
import {Link} from "react-router-dom"

import { Container } from 'reactstrap';
import {useSelector, useDispatch} from "react-redux";

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'Toys',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Category',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }

]

const Header = () => {

    const menuRef = useRef();
    const totalQuantity = useSelector(state=> state.cart.totalQuantity);
    const dispatch = useDispatch ()

    const menuToggle =()=> menuRef.current.classList.toggle('active__menu');

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
      };
  return (
    <header className="header">

        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className="d-flex align-items-center gap-1">
                        <span><i class="ri-store-2-line"></i></span> Toy Store
                    </h2>
                </div>
                
                <div className="nav__menu "  ref={menuRef}>
                    <div className="nav__list__wrapper d-flex align-items-center gap-5">
                    <ul className="nav__list">
                         {
                            navLinks.map((item,index)=>(
                                <li className="nav__item" key={index}>
                                    <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                    </li>

                            ))}
                    </ul>

                    <div className="menu__right">
                    <div className="custom__search">
                        <input type="text" placeholder="search item..." />
                        <span>
                            <i class="ri-search-line"></i>
                            </span>
                    </div>
                </div>

                    </div>
                    
                </div>

              <div>
                <span className="cart__icon" onClick={toggleCart}>
                <i class="ri-shopping-basket-line"></i>

                <span className="bedge">{totalQuantity}</span>
                </span>
              </div>

                <div className="mobile__menu">
                    <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>


    
    </header>
  )
}

export default Header