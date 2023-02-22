import React, {Component} from 'react';
import Card1 from "../../../components/Card1";

export default class WhyUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    number: '01',
                    title: "Motivated & Organised",
                    text: "I'm always able to learn on the go, estimate work properly, plan well for the work and budget the time effectively."
                },
                {
                    number: '02',
                    title: "Can-do attitude",
                    text: "A troubleshooter and a problem solver. I'm adept at swiftly handling difficult problems with a smile."
                },
                {
                    number: '03',
                    title: "Love for Technology",
                    text: "“Doing what you love” is more than just a saying for me. I always strive to acquire a deep understanding of technology."
                }
            ]
        }
    }

    render() {
        const { list } = this.state;

        return (
            <section id="why-us" className="why-us element">
                <div className="container">

                    <div className="row">
                        {
                            list.map(item => (
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <Card1 data={item} key={item.number}/>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        )
    }
}
