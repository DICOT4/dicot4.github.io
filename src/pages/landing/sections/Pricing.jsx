import React, {Component} from 'react';

export default class Features extends Component {

    render() {
        return (
            <section id="pricing" className="pricing">
                <div className="container">

                    <div className="section-title">
                        <h2>Pricing</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row no-gutters">

                        <div className="col-lg-4 box">
                            <h3>Free</h3>
                            <h4>$0<span>per hour</span></h4>
                            <ul>
                                <li><i className="bx bx-check"/> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"/> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"/> Nulla at volutpat diam uteera</li>
                                <li className="na"><i className="bx bx-x"/>
                                    <span>Pharetra massa massa ultricies</span></li>
                                <li className="na"><i className="bx bx-x"/>
                                    <span>Massa ultricies mi quis hendrerit</span></li>
                            </ul>
                            <a href="#" className="btn-buy">Get Started</a>
                        </div>

                        <div className="col-lg-4 box featured">
                            <h3>Business</h3>
                            <h4>$9<span>per hour</span></h4>
                            <ul>
                                <li><i className="bx bx-check"/> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"/> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"/> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"/> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"/> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="btn-buy">Get Started</a>
                        </div>

                        <div className="col-lg-4 box">
                            <h3>Developer</h3>
                            <h4>$19<span>per hour</span></h4>
                            <ul>
                                <li><i className="bx bx-check"/> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"/> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"/> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"/> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"/> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="btn-buy">Get Started</a>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
