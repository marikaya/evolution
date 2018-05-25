import React from 'react';
import css from './Header.scss';

class Header extends React.Component{
    render(){
        return (
            <header className={css.header}>
                <nav className={'navbar navbar-expand-lg ' + css.mainNavbar}>
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <a className={css.navbarBrand} href="#" title="kulzos">
                                <svg className={css.kulzosLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.2 22.2">
                                    <path className={css.kulzosPath} d="M13.8 20c0 .5-.2 1-.6 1.4-.4.4-.9.7-1.5.7-.3 0-.6-.1-.9-.2-.3-.1-.6-.4-.8-.7l-3.6-5.3-1.9 2V20c0 .6-.2 1-.6 1.4-.3.4-.8.6-1.3.6-.6 0-1-.2-1.4-.6-.5-.4-.7-.8-.7-1.4V2.3c0-.6.2-1 .6-1.4S2 .3 2.6.3s1 .2 1.4.6.6.9.6 1.4v11l5.5-6.5c.4-.4.8-.6 1.4-.6.5 0 1 .2 1.3.6s.6.8.6 1.3c0 .4-.1.9-.4 1.2l-3.6 4.1 4.1 5.4c.2.4.3.8.3 1.2zM29.9 21.4c-.4.4-.9.6-1.5.6s-1-.2-1.4-.6-.6-.9-.6-1.4v-.1c-.5.6-1.3 1.1-2.2 1.6-.9.5-2 .7-3.3.7-1.7 0-3-.4-3.8-1.3s-1.2-2.1-1.2-3.6V8.2c0-.6.2-1 .6-1.4.5-.4.9-.6 1.5-.6s1 .2 1.4.6c.4.3.6.8.6 1.4v7.6c0 .5.1 1 .2 1.3.1.4.3.7.6.9s.5.4.9.5.7.1 1.2.1c.8 0 1.5-.2 2.1-.5s1.1-.8 1.4-1.2V8.2c0-.6.2-1 .6-1.4s.9-.6 1.5-.6 1 .2 1.4.6.6.9.6 1.4V20c0 .6-.2 1-.6 1.4zM36.3 21.4c-.4.4-.9.6-1.5.6s-1-.2-1.4-.6c-.4-.4-.6-.8-.6-1.4V2.3c0-.6.2-1 .6-1.4.4-.4.9-.6 1.5-.6s1 .2 1.4.6.6.9.6 1.4V20c0 .6-.2 1-.6 1.4zM51.3 20c0 .5-.2.9-.5 1.3s-.7.5-1.2.5h-9.2c-.5 0-1-.2-1.4-.6s-.6-.9-.6-1.5c0-.2 0-.5.1-.7l.3-.6 6.7-8.5h-5.4c-.5 0-.9-.2-1.2-.5-.3-.4-.5-.8-.5-1.3s.2-.9.5-1.2c.3-.3.8-.5 1.2-.5h9.1c.5 0 .9.2 1.3.6.4.4.6.8.6 1.4 0 .5-.1.9-.4 1.3l-6.8 8.6h5.7c.5 0 .9.2 1.2.5.4.3.5.7.5 1.2zM68.2 14.1c0 1.1-.2 2.2-.6 3.1-.4 1-.9 1.8-1.6 2.6-.7.7-1.6 1.3-2.6 1.8-1 .4-2.2.7-3.4.7-1.3 0-2.4-.2-3.4-.7s-1.9-1-2.6-1.8c-.7-.7-1.2-1.6-1.6-2.6-.4-1-.6-2-.6-3.1s.2-2.1.6-3.1c.4-1 .9-1.8 1.6-2.6.7-.7 1.6-1.3 2.6-1.8 1-.4 2.1-.6 3.4-.6s2.4.2 3.4.7c1 .4 1.9 1 2.6 1.8.7.7 1.2 1.6 1.6 2.6.4.9.6 1.9.6 3zm-4.3 0c0-.6-.1-1.2-.3-1.7s-.4-1-.8-1.4c-.3-.4-.7-.7-1.2-1-.5-.2-1-.4-1.7-.4-.6 0-1.2.1-1.7.4-.5.2-.9.6-1.2 1s-.6.9-.8 1.4-.3 1.1-.3 1.7c0 .6.1 1.2.3 1.7.2.5.4 1 .8 1.4.3.4.7.7 1.2 1 .5.2 1 .4 1.7.4.6 0 1.2-.1 1.7-.4.5-.2.9-.6 1.2-1s.6-.9.8-1.4c.2-.5.3-1.1.3-1.7zM81.8 17.3c0 .7-.1 1.4-.4 2s-.7 1.1-1.3 1.6c-.6.4-1.3.8-2.1 1s-1.8.4-2.8.4c-.5 0-1.1 0-1.7-.1s-1.2-.2-1.8-.4c-.6-.2-1.1-.4-1.6-.6s-.9-.6-1.1-.9-.3-.5-.3-.9c0-.5.2-.9.5-1.2.4-.3.7-.5 1.2-.5.3 0 .6.1.8.2.6.4 1.3.7 2 .9.7.2 1.4.4 2.1.4.9 0 1.6-.2 2-.5s.6-.7.6-1.2c0-.4-.2-.7-.7-1-.5-.2-1-.4-1.7-.5s-1.4-.3-2.2-.5c-.8-.2-1.5-.4-2.2-.8-.7-.3-1.2-.8-1.7-1.4-.5-.6-.7-1.4-.7-2.4 0-.6.1-1.3.4-1.8.3-.6.7-1.1 1.2-1.6.5-.4 1.2-.8 2-1.1.8-.3 1.7-.4 2.7-.4.5 0 1.1 0 1.6.1.6.1 1.1.2 1.6.4s1 .4 1.4.6.7.5 1 .8c.2.2.3.5.3.8 0 .4-.2.8-.5 1.1s-.7.4-1.1.4c-.3 0-.6-.1-.8-.2-.5-.3-1-.5-1.6-.7s-1.2-.2-1.8-.2c-.7 0-1.3.1-1.8.4-.4.3-.7.7-.7 1.1 0 .4.2.7.7.9.4.2 1 .4 1.7.5s1.4.3 2.2.5 1.5.5 2.2.8 1.2.9 1.7 1.5c.4.6.7 1.4.7 2.5z"/>
                                </svg>
                            </a>
                            <form className={'form-inline my-2 my-lg-0 '+ css.topSearchForm}>
                                <input className={'form-control ' + css.topSearch}  type="search" placeholder="başlık, #girdi, *kategori ya da @yazar" aria-label="Ara"/>
                                    <div className="btn-group navbar-search-btn">
                                        <button type="button" className={'btn btn-secondary ' + css.headerSearchIcon}>
                                            <i className="icon-magnifier"/>
                                        </button>
                                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                            </form>
                            <ul className={'navbar-nav ml-auto justify-content-end text-right ' + css.headerUserBar}>
                                <li><a className={css.navbarLink} data-toggle="tooltip" data-title="mesajlar" data-placement="bottom" href="#" data-original-title="" title="">
                                    <i className="icon-envelope"/>
                                </a></li>
                                <li>
                                    <div className="dropdown">
                                        <span className={css.notificationCount}>1</span>
                                        <a className={'dropdown-toggle ' + css.navbarLink} role="button" id="notificationList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                            <i className="icon-bell"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="onlineList">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li><li><a href="#" data-toggle="tooltip" data-title="duyurular" data-placement="bottom" data-original-title="" title="">
                                <i className="icon-feed"/>
                            </a></li>
                                <li>
                                    <div className="dropdown">
                                        <a className={'dropdown-toggle ' + css.navbarLink} role="button" id="onlineList" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                            <i className="icon-people"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="onlineList">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <a className={'dropdown-toggle ' + css.navbarLink} role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                            <i className="icon-user"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;