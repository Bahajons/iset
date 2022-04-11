import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skill() {
    AOS.init();
    return (
        <div className="skill py-5">
            <div className="container">
                <div className="row pt-3">
                    <div className="d-md-flex mx-0 row w-100 justify-content-md-center">
                        <div className="col-md-3 mt-3 col-6">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/design.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>Product Design</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 col-6">
                            <div data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/UI.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>UX/UI Design</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 col-6">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/fontisto_nav-icon-list.png" alt="" />

                                </div>
                                <div className="card-body">
                                    <h6>Icon Design</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 col-6">
                            <div data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/carbon_logo-delicious.png" alt="" />

                                </div>
                                <div className="card-body">
                                    <h6>Logo Design</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3 mt-3 col-6">
                            <div data-aos="fade-up"
                                data-aos-duration="9000" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/bx_bx-code-alt.png" alt="" />

                                </div>
                                <div className="card-body">
                                    <h6>Backend</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 col-6">
                            <div  data-aos="fade-up"
                                data-aos-duration="9000" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/Group1.png" alt="" />

                                </div>
                                <div className="card-body">
                                    <h6>Frontend</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3 offset-md-0 offset-3 col-6">
                            <div data-aos="fade-up"
                                data-aos-duration="9000" className="card py-3">
                                <div className="card-header border-0">
                                    <img className="w-50 mx-auto" src="images/ic_baseline-auto-awesome-motion.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h6>Motion</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
