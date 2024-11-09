import { useEffect } from "react";
import SideNav from "../../components/sideNav"
import TopNav from "../../components/TopNav"
import { useDispatch } from "react-redux";
import { currUserReq } from "../../redux/LoginSaga/LoginActions";
import { BlogCard } from "../../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../Utils/axios";

export const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (token) {
            setAuthToken(token);
            dispatch(currUserReq());
        } else {
            navigate("/")
        }
    }, []);

    return (
        <>
            <SideNav />
            <TopNav />
            <BlogCard/>
        </>
    )
}