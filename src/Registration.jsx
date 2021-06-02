import React from 'react';
import images from '../images/2.jpg';

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            {/*<img src={images} alt='photo' className="images" /> for image*/}
                            <h2 className="form-titles">Register here </h2>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" autoComplete="off" required placeholder="Enter your name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off" required placeholder="Enter your email"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="zmdi zmdi-phone material-icons-name"></i></label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" required placeholder="Enter your pnone no."></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="zmdi zmdi-slideshow material-icons-name"></i></label>
                                    <input type="text" name="work" id="work" autoComplete="off" required placeholder="Enter your profession"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" id="password" autoComplete="off" required placeholder="Enter your password"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" required placeholder="conform your password"></input>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register">

                                    </input>

                                </div>
                                <div>
                                    <h5>Already have an account? <a href="login">Login</a></h5>
                                </div>
                            </form>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signup