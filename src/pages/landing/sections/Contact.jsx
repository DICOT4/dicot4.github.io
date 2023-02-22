import React, {Component} from 'react';

export default class Features extends Component {

    render() {
        return (
            <section id="contact" className="contact section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        {/*<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.*/}
                        {/*    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit*/}
                        {/*    alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>*/}
                    </div>
    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info-box">
                                <i className="bx bx-map"/>
                                <h3>Based At</h3>
                                <a href="https://goo.gl/maps/dXHRCAvWhzcCU25h8" target="_blank">Lahore, Pakistan</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box h-100">
                                <i className="bx bx-envelope"/>
                                <h3>Email Me</h3>
                                <a href="mailto:fasihrehman.malik@gmail.com">fasihrehman.malik@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box h-100">
                                <i className="bx bx-phone-call"/>
                                <h3>Call Me</h3>
                                <a href="tel:+923234336012">+92 323 4336012</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
