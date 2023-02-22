import React, { Component } from 'react';

export default class Features extends Component {

    render() {
        return (
            <section id="features" className="features">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="icon-box">
                                <i className="devicon-nodejs-plain colored"/>
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="devicon-react-original colored"/>
                                <h3>ReactJS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                            <div className="icon-box">
                                <i className="devicon-html5-plain colored"/>
                                <h3>HTML5</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                            <div className="icon-box">
                                <i className="devicon-css3-plain colored"/>
                                <h3><a href="">CSS3</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-javascript-plain colored"/>
                                <h3><a href="">JavaScript</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-typescript-plain colored"/>
                                <h3><a href="">TypeScript</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-mongodb-plain colored"/>
                                <h3><a href="">MongoDB</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-mysql-plain colored"/>
                                <h3><a href="">SQL DBs</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-amazonwebservices-original colored"/>
                                <h3><a href="">Amazon Web Services</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-firebase-plain" style={{ color: '#FFCB2B' }}/>
                                <h3><a href="">Google Firebase</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-googlecloud-plain colored"/>
                                <h3><a href="">Google Cloud</a></h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="devicon-github-original colored"/>
                                <h3><a href="">GitHub</a></h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
