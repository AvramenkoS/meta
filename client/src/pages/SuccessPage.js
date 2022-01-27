import React from "react";
import logo from '../assets/logo.png';
import {Link, useHistory} from "react-router-dom";

const SuccessPage = () => {
    const history = useHistory();

    const loginHandler = () => {
        history.push("/login");
    }

    return (
        <div className="auth__wrap">
            <div className="auth__content">
                <div className="auth__header">
                    <Link to="/" className="auth__logo">
                        <img className="auth__logo-img" src={logo} alt="" />
                    </Link>
                </div>
                <div className="auth__form">
                    <div className="card white left-align">
                        <div className="card-head">
                            <h2 className="indigo-text text-darken-3">Thank you!</h2>
                            <span className="blue-grey-text text-darken-3">Your sign-up process is done.</span>
                        </div>
                        <div className="card-body">
                            <div className="text-success">
                                Please Sign in now.
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-success"
                                onClick={loginHandler}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
                <div className="auth__footer">
                    <div className="footer__links">
                        <Link to="/policy" className="footer__link" target="_blank">
                            Privacy and Policy
                        </Link>
                        <Link to="/terms" className="footer__link" target="_blank">
                            Terms and Condition
                        </Link>
                    </div>
                    <span>© 2022 iMetaverse. All Right Reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage