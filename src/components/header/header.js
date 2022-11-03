import React from "react";
import logo from "../../images/nft-logo.png";
import './header.css';


export default function Header() {
    return <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="../../../public/index.html">
                            <img src={logo} alt="" width="50" height="auto"></img>
                            </a>
                        
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link2</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
    </div>
}