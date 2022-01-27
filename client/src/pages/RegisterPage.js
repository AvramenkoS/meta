import React, {useEffect, useState} from "react";
import logo from '../assets/logo.png';
import {Link, useHistory} from "react-router-dom";
import {useHttp} from '../hooks/http.hook';
import {useMessage} from "../hooks/message.hook";

const RegisterPage = () => {
    const message = useMessage();
    const history = useHistory();

    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: '', name: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})

            console.log('Data', data)
            if (data.status === 200) {
                history.push("/success");
            }
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
                            <h2 className="indigo-text text-darken-3">Sign up</h2>
                            <span className="blue-grey-text text-darken-3">Create New iMetaverse Account</span>
                        </div>
                        <div className="card-body">
                            <div className="input-wrap">
                                <div className="input-item">
                                    <input
                                        placeholder="Your Name"
                                        id="email"
                                        type="text"
                                        name="name"
                                        onChange={changeHandler}
                                    />
                                </div>
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
                                <div className="input-item">
                                    <input
                                        placeholder="Repeat Password"
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="form-check">
                                    <div className="input-item">
                                        <input className="input-checkbox input-checkbox-md" type="checkbox"
                                               name="terms" id="agree" />
                                        <label htmlFor="agree">
                                            I agree to the <Link to="/terms" className="blue-text text-darken-3"
                                                                 target="_blank">Terms and Condition</Link> and <Link
                                            to="/policy" className="blue-text text-darken-3" target="_blank">Privacy and
                                            Policy</Link>.
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    onClick={registerHandler}
                                    disabled={loading}
                                >
                                    Create Account
                                </button>
                            </div>
                            <div className="form-note">
                                Already have an account ? <Link to="/login" className="blue-text text-darken-3">Sign in
                                instead</Link>
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

export default RegisterPage