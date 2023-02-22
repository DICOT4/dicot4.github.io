import React, {Component} from 'react';

export default class Features extends Component {

    render() {
        return (
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-6 footer-contact">
                                <h3>Fasih M.</h3>
                                <p>
                                    Lahore, Punjab<br/>
                                    Pakistan <br/><br/>
                                    <strong>Phone:</strong> +92 323 4336012<br/>
                                    <strong>Email:</strong> fasihrehman.malik@gmail.com<br/>
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4 className="mb-0">Get in touch!</h4>
                                <p>Share your email and I'll get back to you</p>
                                {/*<form action="/" method="post">*/}
                                    <div className="input-group custom-search">
                                        <input type="email" name="email" className="form-control custom-search-input"
                                               placeholder="example@sample.com" required/>
                                            <button className="custom-search-button px-3" type="submit">
                                                <i className="fa fa-paper-plane" aria-hidden="true"/>
                                            </button>
                                    </div>
                                {/*</form>*/}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="mr-md-auto text-center text-md-left">
                        {/*<div className="copyright">*/}
                        {/*    &copy; Copyright <strong><span>Portfolio</span></strong>. All Rights Reserved*/}
                        {/*</div>*/}
                        {/*<div className="credits">*/}
                        {/*Designed with <i className="bx bxs-heart text-danger"/> by <a href="#">DICOTA</a>*/}
                        {/*</div>*/}
                        <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="" className="img-fluid mr-md-1"/>
                        <img src="https://forthebadge.com/images/badges/powered-by-energy-drinks.svg" alt="" className="img-fluid mr-md-1"/>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://join.skype.com/invite/xdkeXBeVg47j"><i className="bx bxl-skype"/></a>
                        <a href="https://www.linkedin.com/in/fasih-malik/" target="_blank"><i className="bx bxl-linkedin"/></a>
                        <a href="https://github.com/DICOT4" target="_blank"><i className="bx bxl-github"/></a>
                    </div>
                </div>
            </footer>
        )
    }
}
