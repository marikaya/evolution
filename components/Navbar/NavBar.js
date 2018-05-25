import React from 'react';
import css from './Navbar.scss';


class NavBar extends React.Component{
    render(){
        return (
            <div className={css.headerBottom}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ul className={css.headerBottomLeft}>
                                <li><a href="#">gündem</a></li>
                                <li><a href="#">ükde</a></li>
                                <li><a href="#">diğer</a></li>
                                <li><a href="#">spor</a></li>
                                <li><a href="#">sanat</a></li>
                                <li><a href="#">politika</a></li>
                                <li><a href="#">gündem</a></li>
                                <li><a href="#">ükde</a></li>
                                <li><a href="#">diğer</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className={css.headerBottomRight}>
                                <li><a href="#" className="theme-link" data-theme="white">beyaz</a> </li>
                                <li><a href="#" className="theme-link" data-theme="dark">gece</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;