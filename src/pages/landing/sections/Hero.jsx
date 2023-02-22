import React, { Component } from 'react';
import {Link} from "react-scroll";
import Skeleton from "react-loading-skeleton";
import Typewriter from 'typewriter-effect';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroBullets: [
                "Dolorem ratione dolorum",
                "Quo nihil natus ea non pariatur optio occaecati",
                "Duis aute irure dolor in reprehenderit in",
            ],
            heroBullets2: [
                null,
                null,
                null
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        const { heroBullets, heroBullets2 } = this.state;

        return (
            <section id="hero" className="d-flex align-items-center element">

                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 className="font-weight-lighter">Hello! <br/> I'm <span className="font-weight-bold">Fasih M.</span></h1>
                            <h2 className="subtitle">
                                {
                                    <Typewriter
                                        options={{
                                            strings: ['a MERN Stack Developer', 'an AWS Architect', 'a Software Engineer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                     onInit={typewriter => typewriter.start()}/>
                                }
                            </h2>
                            <h3 className="mt-5">
                                <i className="devicon-nodejs-plain colored mr-2"/>
                                <i className="devicon-react-original colored mr-2"/>
                                <i className="devicon-html5-plain colored mr-2"/>
                                <i className="devicon-css3-plain colored mr-2"/>
                                <i className="devicon-javascript-plain colored mr-2"/>
                                <i className="devicon-typescript-plain colored mr-2"/>
                                <i className="devicon-amazonwebservices-original colored mr-2"/>
                                <i className="devicon-firebase-plain colored mr-2"/>
                                <i className="devicon-heroku-original colored mr-2"/>
                                <i className="devicon-github-original colored mr-2"/>
                                <i className="devicon-mongodb-plain colored mr-2"/>
                                <i className="devicon-sequelize-plain colored mr-2"/>
                                <i className="devicon-mysql-plain colored mr-2"/>

                            </h3>
                            <div className="mt-3">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000} delay={100}
                                      className="cursor-pointer btn-get-started">
                                    Contact Me
                                </Link>
                                {/*<Link to="portfolio" spy={true} smooth={true} offset={-100} duration={1000} delay={100}*/}
                                {/*      className="cursor-pointer btn-get-quote">*/}
                                {/*    View Portfolio*/}
                                {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ml-2"*/}
                                {/*         fill="currentColor"*/}
                                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                                {/*        <path fillRule="evenodd"*/}
                                {/*              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>*/}
                                {/*    </svg>*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img my-5 my-lg-0">
                            <img src="images/landing-image-4.svg" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={1000} delay={100} className="cursor-pointer">
                                <svg className="arrows">
                                    <path className="a1" d="M0 0 L15 12 L30 0"/>
                                    <path className="a2" d="M0 20 L15 32 L30 20"/>
                                    <path className="a3" d="M0 40 L15 52 L30 40"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
