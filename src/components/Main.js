import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";
export default function Main() {

    return (
        <div className="Home">
            <Container>
                <div className="row left pt-5 ">
                    <div className="col-md-6">
                        <h3 className="pt-0">Assalomu alaykum</h3>
                        <h2>Bizning jamoa iSet</h2>
                        <p className="py-4">Biz 3 yildan beri veb-dizayn, front-end va back-end ishlab chiqarish bilan shug'ullanamiz. Sizga veb-sayt dizayni, landing page yoki internet do'kon veb-sayt kerakmi ? Keling biz bilan bog'laning !</p>
                        <Link to="/contact">
                            <a>Bog'lanish</a>
                        </Link>
                    </div>
                    <div className="col-md-6 pt-5">
                        <img className="w-100" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" src='images/Gleb.png' />
                    </div>
                </div>
            </Container>
        </div>
    )
}