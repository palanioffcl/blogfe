import './index.css';
import img from '../../assets/icon.png'
import { useFormik } from 'formik';
import { LoginReq } from '../../redux/LoginSaga/LoginActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        }, onSubmit: (values) => {
            dispatch(LoginReq(values));
        }
    })

    const loginResponse = useSelector((state) => state.login);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === loginResponse.user_token) {
            navigate("/home")
        } else {
            if (loginResponse.user_token) {
                navigate("/home")
            } else navigate("/");
        }
    }, [loginResponse]);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="Login">
                    <div className="LoginDiv">
                        <div><img style={{ height: 40 }} src={img} /></div><div style={{ color: 'white' }}>Sign in to Blogs</div>
                        <input type="text" placeholder="Username" id="username" onChange={formik.handleChange}></input>
                        <input type="password" placeholder="Password" id="password" onChange={formik.handleChange}></input>
                        <input type="submit" value="Continue"></input>
                        <a href='/signup'>
                            Don't have account ?
                        </a>
                    </div>
                </div>
            </form>
        </>
    );
}