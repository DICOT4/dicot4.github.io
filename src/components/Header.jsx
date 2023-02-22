import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'hero'
        }
    }
    
    componentDidMount() {
    }
    
    handleActive = (name) => {
        this.setState({active: name})
    }
    
    render() {
        const {active} = this.state;
        
        return (
            <header id="header" className="fixed-top element">
                <div className="container d-flex align-items-center justify-content-between">
                    
                    <h1 className="logo">
                        {/*<a href="index.html">Resi.</a>*/}
                        <NavLink exact to="/">
                            Fasih M.
                        </NavLink>
                    </h1>
                    {/*Uncomment below if you prefer to use an image logo*/}
                    {/*<a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}
                    
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className={active === 'hero' ? 'active' : ''}>
                                {/*<a href="#header">Home</a>*/}
                                <Link to="hero" spy={true} smooth={true} duration={1000} delay={100}
                                      className="cursor-pointer"
                                      onSetActive={() => this.handleActive('hero')}
                                      onClick={() => this.handleActive('hero')}>
                                    Home
                                </Link>
                            </li>
                            <li className={active === 'about' ? 'active' : ''}>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={1000} delay={100}
                                      className="cursor-pointer"
                                      onSetActive={() => this.handleActive('about')}
                                      onClick={() => this.handleActive('about')}>
                                    About
                                </Link>
                            </li>
                            <li className={active === 'services' ? 'active' : ''}>
                                <Link to="services" spy={true} smooth={true} offset={-50} duration={1000} delay={100}
                                      className="cursor-pointer"
                                      onSetActive={() => this.handleActive('services')}
                                      onClick={() => this.handleActive('services')}>
                                    Services
                                </Link>
                            </li>
                            {/*<li className={active === 'portfolio' ? 'active' : ''}>*/}
                            {/*    <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={1000} delay={100}*/}
                            {/*          className="cursor-pointer"*/}
                            {/*          onSetActive={() => this.handleActive('portfolio')}*/}
                            {/*          onClick={() => this.handleActive('portfolio')}>*/}
                            {/*        Portfolio*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li className={active === 'contact' ? 'active' : ''}>
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={1000} delay={100}
                                      className="cursor-pointer"
                                      onSetActive={() => this.handleActive('contact')}
                                      onClick={() => this.handleActive('contact')}>
                                    Contact
                                </Link>
                            </li>
                        
                        </ul>
                    </nav>
                    
                    {/*{*/}
                    {/*    user ? (*/}
                    {/*        <div className="drop-down-menu">*/}
                    {/*            <ul>*/}
                    {/*                <li className="drop-down p-0">*/}
                    {/*                    <a>*/}
                    {/*                        <img*/}
                    {/*                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"*/}
                    {/*                            className="rounded-circle profile-image"*/}
                    {/*                            alt="avatar image" height="35"/>*/}
                    {/*                            <span className="profile-name">*/}
                    {/*                                {user.firstName}*/}
                    {/*                            </span>*/}
                    {/*                    </a>*/}
                    {/*                    <ul>*/}
                    {/*                        <li>*/}
                    {/*                            <a href="/laura">*/}
                    {/*                                <svg width="1em" height="1em" viewBox="0 0 16 16"*/}
                    {/*                                     className="bi bi-bar-chart-line mr-2"*/}
                    {/*                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                                    <path fill-rule="evenodd"*/}
                    {/*                                          d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>*/}
                    {/*                                </svg>*/}
                    {/*                                Dashboard*/}
                    {/*                            </a>*/}
                    {/*                        </li>*/}
                    {/*                        <li>*/}
                    {/*                            <a href="#">*/}
                    {/*                                <svg width="1em" height="1em" viewBox="0 0 16 16"*/}
                    {/*                                     className="bi bi-gear mr-2"*/}
                    {/*                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                                    <path fill-rule="evenodd"*/}
                    {/*                                          d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>*/}
                    {/*                                    <path fill-rule="evenodd"*/}
                    {/*                                          d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>*/}
                    {/*                                </svg>*/}
                    {/*                                Settings*/}
                    {/*                            </a>*/}
                    {/*                        </li>*/}
                    {/*                        <li>*/}
                    {/*                            <form action="/logout" method="post">*/}
                    {/*                                <button type="submit" className="btn">*/}
                    {/*                                    <svg width="1em" height="1em" viewBox="0 0 16 16"*/}
                    {/*                                         className="bi bi-power mr-2"*/}
                    {/*                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                                        <path fill-rule="evenodd"*/}
                    {/*                                              d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>*/}
                    {/*                                        <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z"/>*/}
                    {/*                                    </svg>*/}
                    {/*                                    Log Out*/}
                    {/*                                </button>*/}
                    {/*                            </form>*/}
                    {/*                        </li>*/}
                    {/*                    </ul>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    ) : (*/}
                    {/*        <div className="my-menu mr-2 mr-lg-0">*/}
                    {/*            <ul>*/}
                    {/*                <li className="d-none d-lg-block"><a href="/login">Log In</a></li>*/}
                    {/*                <li className="d-block d-lg-none">*/}
                    {/*                    <a href="/login" className="btn-login">*/}
                    {/*                        Log In*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li className="d-none d-lg-block"><a href="/signup">Sign Up</a></li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                
                </div>
            </header>
        );
    }
}
