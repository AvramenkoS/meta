import React from "react";
// import { RiDashboardLine } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="header">
            <div className="navbar-fixed">
                <nav className="indigo darken-3">
                    <div className="container">
                        <div className="nav-wrapper">
                            {/*<a href="#" className="brand-logo">*/}
                            {/*    <img src="https://apple.icometaverse.io/wallet/images/logo-light.png" alt="" />*/}
                            {/*</a>*/}
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>Welcome! Alex</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <nav className="white">
                <div className="container">
                    <div className="nav-wrapper">
                        {/*<ul id="nav-mobile" className="left hide-on-med-and-down">*/}
                        {/*    <li><a className="blue-text text-darken-2" href=""><RiDashboardLine /> Dashboard</a></li>*/}
                        {/*    <li><a className="blue-text text-darken-2" href="">Buy Token</a></li>*/}
                        {/*    <li><a className="blue-text text-darken-2" href="">Transactions</a></li>*/}
                        {/*    <li><a className="blue-text text-darken-2" href="">Profile</a></li>*/}
                        {/*    <li><a className="blue-text text-darken-2" href="">My Token</a></li>*/}
                        {/*    <li><a className="blue-text text-darken-2" href="">Main Site</a></li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header