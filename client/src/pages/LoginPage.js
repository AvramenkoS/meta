import React, {useContext, useEffect, useState} from "react";
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

const LoginPage = () => {
    const auth = useContext(AuthContext)

    const message = useMessage();

    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
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
                            <h2 className="indigo-text text-darken-3">Sign in</h2>
                            <span className="blue-grey-text text-darken-3">With Your iMetaverse Account</span>
                        </div>
                        <div className="card-body">
                            <div className="input-wrap">
                                <div className="input-item">
                                    <input
                                        placeholder="Your Email"
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="input-item">
                                    <input
                                        placeholder="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="form-check">
                                    <div className="input-item">
                                        <input className="input-checkbox input-checkbox-md" type="checkbox"
                                               name="remember" id="remember-me" />
                                            <label htmlFor="remember-me">Remember Me</label>
                                    </div>
                                    <div>
                                        Forgot password?
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    onClick={loginHandler}
                                    disabled={loading}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="form-note">
                                Don’t have an account? <Link to="/register" className="blue-text text-darken-3">Sign up here</Link>
                            </div>
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

export default LoginPage