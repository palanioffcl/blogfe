import '../Login/index.css'
import img from '../../assets/icon.png'
import { useDispatch } from 'react-redux'
import { useFormik } from "formik";
import { SignUpReq } from '../../redux/SignUpSaga/SignUpActions';


export const SignUp = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        }, onSubmit: (values) => {
            dispatch(SignUpReq(values));
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="Login">
                    <div className="LoginDiv">
                        <img style={{ height: 40 }} src={img} /><div style={{ color: 'white' }}>SignUp it's Free</div>
                        <input type="name" placeholder="username" name="username" onChange={formik.handleChange}></input>
                        <input type="email" placeholder="Email" name="email" onChange={formik.handleChange}></input>
                        <input type="password" placeholder="Password" name="password" onChange={formik.handleChange}></input>
                        <input type="submit" value="Continue" ></input>
                        <a href='/'>
                            Click to Login
                        </a>
                    </div>
                </div>
            </form>
        </>
    );
}