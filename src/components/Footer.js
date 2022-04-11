import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer py-md-5 py-2">
            <div className="container">
                <div className="row">
                    <div className="col-3 ">
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a className="mr-5"><Link to="/">Home</Link></a>
                            </li>
                            <li className="mb-2">
                                <a className="mr-5"><Link to="/about">About Us</Link></a>
                            </li>
                            <li className="mb-2">
                                <a className="mr-5"><Link to="/portfolia">Portfolia</Link></a>
                            </li>
                            <li className="mb-2">
                                <a className="mr-5"><Link to="/contact">Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled">
                            <li>
                                <h4>Contact</h4>
                            </li>
                            <li>
                                <h4>Email:<a className="px-2" href="mailto:isetcompany98@gmail.com">isetcompany98@gmail.com</a></h4>
                            </li>
                            <li>
                                <h4>Telegram:<a className="px-2" href="https://t.me/isetuz">isetuz</a></h4>
                            </li>
                            <li>
                                <h4>Tel:<a className="pl-2" href="tel:+998932216998">+998932216998</a></h4>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 offset-md-2 offset-3">
                        <Link to="/">
                            <img className='' style={{ width: "150px" }} src='images/logo.png' />
                        </Link>
                        <h4 className="pt-md-5 pt-3">Copyright © 2021, iSet.uz</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
