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
                                        <h2 className="h2-responsive wow fadeInLeft" style={{color:'white'}}>Welcome, you have reached </h2><h2 id="nameView"  className="h2-responsive wow fadeIn">Kevin Lee</h2>
                                        <hr className="hr-light"/>
                                        <p className="wow fadeInLeft" data-wow-delay="0.4s" style={{color:'white'}}>This is my Portfolio. Here you will find all my works in web development. Take a stroll and please feel free to contact me. Enjoy!</p>
                                        <br/>
                                        <a className="btn btn-white-outline btn-lg wow fadeInLeft" data-wow-delay="0.7s" href="#contactForm">Contact Me</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Portfolio Gallery */}
            <section className="container" id="gallery">
                <br/>
                <h1 style={{color: 'black', fontWeight: '700'}}>Portfolio Gallery</h1>
                <br />
                <div className="row galleryItems">
                    
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-white-slight">
                            <img src="./img/bandmatesoverlay.png"/>
                            <a href="https://tranquil-brushlands-39830.herokuapp.com/" target="_blank"><div className="mask"></div></a>
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">Bandmates</h4>

                            <p className="card-text">A hub for musicians to connect with other musicians and producers alike</p>
                            <a href="https://github.com/ajzamojski/Bandmates" className="btn btn-info waves-effect waves-light" target="_blank">GITHUB</a>
                        </div>
                    </div>
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-white-slight">
                            <img src="./img/studybuddyoverlay.png"/>
                            <a href="https://study-buddy-1.herokuapp.com/" target="_blank"><div className="mask"></div></a>
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">Study Buddy</h4>

                            <p className="card-text">A social platform/application, where users can view and seek potential ‘buddies’ to learn from, study with or teach</p>
                            <a href="https://github.com/klee91/StudyBuddy" className="btn btn-info waves-effect waves-light" target="_blank">GITHUB</a>
                        </div>
                    </div>
                    <div className="card wow fadeIn">
                        <div className="view overlay hm-white-slight">
                            <img src="./img/rroverlay.png"/>
                            <a href="https://pure-atoll-60901.herokuapp.com/" target="_blank"><div className="mask"></div></a>
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
                                <div className="text-center">
                                    <h3><i className="fa fa-envelope"></i> Contact Me:</h3>
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