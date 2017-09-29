import React from 'react';

class Portfolio extends React.Component{

    render() {
        return (
            <div>

            {/* Header */}
            <header>
                {/* View */}
                <div className="view">
                    <div className="full-bg-img flex-center">
                        <div className="container">
                            <div className="row" id="home">

                                <div className="col-lg-6">
                                    <div className="description">
                                        <h2 className="h2-responsive wow fadeInLeft" style={{color:'white'}}>Welcome, you have reached </h2>
                                        <div><h2 id="nameView"  className="h2-responsive wow fadeIn">Kevin Lee</h2></div>
                                        <hr className="hr-light"/>
                                        <p className="wow fadeInLeft" data-wow-delay="0.4s" style={{color:'white'}}>This is my Portfolio. Here you will find all my works in web development. Take a stroll and please feel free to contact me. Enjoy!</p>
                                        <br/>
                                        <a id="contactBtn" className="btn btn-white-outline btn-lg wow fadeInLeft" data-wow-delay="0.7s" href="#contactForm">Contact Me</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Details/Skills */}
            <section className="container" id="skills">
                <div>
                    <h1 className="h1-responsive wow fadeIn" style={{color: 'black', fontWeight: '700'}}>Skills & Experience:</h1>
                    <br/>
                    <p className="wow fadeIn">I have collaborative experience in front end development with HTML/CSS/JS as well as the back end in managing databases (MySQL + MongoDB). Most of my projects are built through a MVC architecture, the latest built through a MERN stack (MySQL + Express + React + Node) </p>
                </div>
                <br/>
                <div className="container">
                    <h4 className="h4-responsive wow fadeIn">A list of technologies I have experience with:</h4>
                    <div className="row">
                        <ul className="wow fadeIn col">
                            <li style={{fontWeight: '700'}}>Front End:</li>
                            <li> &#8226; HTML 5</li>
                            <li> &#8226; CSS 3</li>
                            <li> &#8226; JavaScript</li>
                            <li> &#8226; Bootstrap</li>
                            <li> &#8226; jQuery</li>
                            <li> &#8226; Responsive Web Design</li>
                            <li> &#8226; React</li>
                            <li> &#8226; React Router V4</li>
                        </ul>
                        <ul className="wow fadeIn col">
                            <li style={{fontWeight: '700'}}>Back End:</li>
                            <li> &#8226; Node JS</li>
                            <li> &#8226; npm</li>
                            <li> &#8226; Express.js</li>
                            <li> &#8226; AJAX</li>
                            <li> &#8226; REST APIs</li>
                            <li> &#8226; MySQL</li>
                            <li> &#8226; Sequelize ORM</li>
                            <li> &#8226; MongoDB</li>
                            <li> &#8226; Mongoose</li>
                            <li> &#8226; Firebase</li>
                        </ul>
                    </div>
                </div>
                <br/>
            </section>
            <hr/>

            {/* Portfolio Gallery */}
            <section className="container" id="gallery">
                <br/>
                <h1 className="h1-responsive wow fadeIn" style={{color: 'black', fontWeight: '700'}}>Portfolio Gallery</h1>
                <br/>
                <div className="row galleryItems">
                    
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-teal-strong projectImg">
                            <img src="./img/bandmatesoverlay.png"/>
                            
                                <a href="https://tranquil-brushlands-39830.herokuapp.com/" target="_blank"><div className="mask flex-center">
                                    <div className="white-text">CHECK ME OUT</div>
                                </div></a>
                            
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">Bandmates</h4>

                            <p className="card-text">A hub for musicians to connect with other musicians and producers alike</p>
                            <a href="https://github.com/ajzamojski/Bandmates" className="btn btn-info waves-effect waves-light" target="_blank">GITHUB</a>
                        </div>
                    </div>
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-teal-strong projectImg">
                            <img src="./img/studybuddy.png"/>
                                <a href="https://study-buddy-1.herokuapp.com/" target="_blank"><div className="mask flex-center">
                                    <div className="white-text">CHECK ME OUT</div>
                                </div></a>
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">Study Buddy</h4>

                            <p className="card-text">A social platform/application, where users can view and seek potential ‘buddies’ to learn from, study with or teach</p>
                            <a href="https://github.com/klee91/StudyBuddy" className="btn btn-info waves-effect waves-light" target="_blank">GITHUB</a>
                        </div>
                    </div>
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-teal-strong projectImg">
                            <img src="./img/rr.png"/>
                            
                                <a href="https://pure-atoll-60901.herokuapp.com/" target="_blank"><div className="mask flex-center">
                                    <div className="white-text">CHECK ME OUT</div>
                                </div></a>
                            
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">Restaurant-Roulette</h4>

                            <p className="card-text">An app which chooses a restaurant to eat at, based on a different search criteria</p>
                            <a href="https://github.com/klee91/restaurant-roulette" className="btn btn-info waves-effect waves-light" target="_blank">GITHUB</a>
                        </div>
                    </div>
               
                </div>
            </section>

            {/* Contact Form */}
            <section id="contactForm">
                        <div className="card wow fadeInRight">
                            <div className="card-block">
                                <div>
                                    <h3>Contact Me:</h3>
                                    <hr/>
                                </div>
                                <form action="https://formspree.io/lee.kev1991@gmail.com" method="POST" id="emailForm">
                                <div className="md-form">
                                    <i className="fa fa-user prefix"></i>
                                    <input type="text" id="form3" className="form-control" name="name"/>
                                    <label htmlFor="form3">Your name</label>
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-envelope prefix"></i>
                                    <input type="text" id="form2" className="form-control" name ="_replyto"/>
                                    <label htmlFor="form2">Your email</label>
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-pencil prefix"></i>
                                    <textarea type="text" id="form8" className="md-textarea" name="message"></textarea>
                                    <label htmlFor="form8">Your message</label>
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary btn-lg">Send</button>
                                </div>
                                </form>
                            </div>
                        </div>
            </section>
            
            {/* Success Modal */}
            <div className="modal fade bottom" id="emailSuccessModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-frame modal-bottom" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Your message has successfully been sent!</p>
                        
                        <button type="button" className="btn btn-secondary waves-effect waves-light" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            </div>

            {/* Footer */}
             <footer className="page-footer center-on-small-only">
                <div className="text-center footTxt">
                    Follow Me:
                </div>
                <hr/>
                <div className="text-center mb-3">

                    <a className="socialBtn btn-fb" href="https://www.facebook.com/kevlee91" target="_blank"><i className="fa fa-facebook" > </i></a>
                    <a className="socialBtn btn-li" href="https://www.linkedin.com/in/kevin-lee-03918457/" target="_blank"><i className="fa fa-linkedin"> </i></a>
                    <a className="socialBtn btn-git" href="https://www.github.com/klee91" target="_blank"><i className="fa fa-github"> </i></a>
                    <a className="socialBtn btn-ins" href="https://www.instagram.com/micklee__/" target="_blank"><i className="fa fa-instagram"> </i></a>

                </div>

                <div className="footer-copyright">
                    <div>
                        Thanks for visiting!
                    </div>
                </div>
            </footer> 
            </div>
        );
    }
}

export default Portfolio;