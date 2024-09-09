import React from 'react';

import Link from './atoms/Link.jsx';

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand text-white" href="#"><b>QTemu</b></a> */}
                <b><Link class='navbar-brand text-white' href='#' value='QTemu'/></b>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link class='nav-link active' href='#' value='Create Meetup'/>
                        </li>
                        <li className="nav-item">
                            <Link class='nav-link' href='#' value='Explore'/>
                        </li>
                    </ul>

                    <a className="d-flex nav-link text-light">
                    <Link class='nav-link active' href='#' value='Login'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
