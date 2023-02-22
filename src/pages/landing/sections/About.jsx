import React, {Component} from 'react';
import {Link} from "react-scroll";

export default class About extends Component {

    render() {
        return (
            <section id="about" className="about element">
                <div className="container">

                    <div className="row content">
                        <div className="col-lg-6">
                            <h2>Me, Myself & I</h2>
                            <h3>A Full-Stack web developer having a serious addiction for performant & beautiful code and
                                intuitive, dynamic user experiences.</h3>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            {/*<p className="mb-0">*/}
                            {/*    My products are*/}
                            {/*</p>*/}
                            <ul>
                                <li><i className="ri-check-double-line"/> Fast load times and lag free interaction, highest priority.
                                </li>
                                <li><i className="ri-check-double-line"/> Layouts that work on any device, big or small.
                                </li>
                                <li><i className="ri-check-double-line"/> Strong preference for easy to use, intuitive UX/UI.
                                </li>
                                <li><i className="ri-check-double-line"/> Websites don't have to be static, love making pages come to life.
                                </li>
                            </ul>
                            <p className="font-italic">
                                I care deeply about building interfaces that are usable and pleasant for the most number of people possible.
                            </p>
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000} delay={100}
                                  className="cursor-pointer link">
                                Let's make something special.
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}
