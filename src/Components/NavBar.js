import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
//import PropTypes from 'prop-types'

export default class NavBar extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NEWSTODAY</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/*
                                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/home">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> 
                            */}
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                            
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/india">India</Link></li>
                                        <li><Link className="dropdown-item" to="/austrailia">Australia</Link></li>
                                        <li><Link className="dropdown-item" to="/canada">Canada</Link></li>
                                        <li><Link className="dropdown-item" to="/china">China</Link></li>
                                        <li><Link className="dropdown-item" to="/france">France</Link></li>
                                        <li><Link className="dropdown-item" to="/japan">Japan</Link></li>
                                        <li><Link className="dropdown-item" to="/newzealand">New Zealand</Link></li>
                                        <li><Link className="dropdown-item" to="/unitedstates">United States</Link></li>
                                    </ul>
                                </li>
                            </ul> 

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
