import React, { Component, Suspense } from 'react';
import {Link, Events, scrollSpy} from "react-scroll";

const Header = React.lazy(() => import(`../../components/Header`));
const Hero = React.lazy(() => import(`./sections/Hero`));
const About = React.lazy(() => import(`./sections/About`));
const WhyUs = React.lazy(() => import(`./sections/WhyUs`));
const Services = React.lazy(() => import(`./sections/Services`));
const Features = React.lazy(() => import(`./sections/Features`));
const Portfolio = React.lazy(() => import(`./sections/Portfolio`));
const Pricing = React.lazy(() => import(`./sections/Pricing`));
const FAQs = React.lazy(() => import(`./sections/FAQs`));
const Contact = React.lazy(() => import(`./sections/Contact`));
const Footer = React.lazy(() => import(`./sections/Footer`));

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Events.scrollEvent.register('begin', function(to, element) {
        //     console.log('begin', arguments);
        // });
        //
        // Events.scrollEvent.register('end', function(to, element) {
        //     console.log('end', arguments);
        // });

        scrollSpy.update();
    }

    componentWillUnmount() {
        // Events.scrollEvent.remove('begin');
        // Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <Suspense fallback={
                <div className="d-flex justify-content-center">
                    Loading...
                </div>
            }>
                <Header/>
                <Hero/>

                <main id="main">
                    <About/>
                    <WhyUs/>
                    <Services/>
                    <Features/>
                    {/*<Portfolio/>*/}
                    {/*<Pricing/>*/}
                    {/*<FAQs/>*/}
                    <Contact/>
                    <Footer/>
                </main>
            </Suspense>
        );
    }
}
