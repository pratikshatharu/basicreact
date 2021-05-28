import React from 'react';

const Login = () => {
    return (
        <>
            <section className="signup">
                <div className="container-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-titles">Log IN</h2>
                            <form className="register-form" id="register-form">
                                <div className="form-group">

                                    <input className="login" type="email" name="email" id="email" autoComplete="off" required placeholder="Enter your email or phone no."></input>
                                </div>
                                <div className="form-group">

                                    <input className="login" type="password" name="password" id="password" autoComplete="off" required placeholder="Enter your password"></input>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="LogIn">

                                    </input>
                                </div>
                                <a href="#" className="reset-psw">FOrgot password?</a>

                                <div>
                                    <button type="button" href="Registration1.jsx" className="new-account">CREATE NEW ACCOUNT</button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;