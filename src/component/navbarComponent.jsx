import React from 'react';

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"><b>QTemu</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Create Meetup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                    </ul>

                    <a class="d-flex nav-link text-light">
                        <a className="nav-link active" aria-current="page" href="#">Login</a>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
