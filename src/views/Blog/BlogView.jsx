import { useEffect, useState } from "react";
import SideNav from "../../components/sideNav";
import { axiosGet } from "../../Utils/axios";
import './index.css';

export const BlogView = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const payload = window.location.href.split('/').slice(-1);
        axiosGet(`blogs/blog/${payload}`).then((response) => setResponse(response.data.data));
    }, []);

    return (
        <>
            <div className="BlogView">
                <SideNav />
                <div>
                    {response.map((blog) =>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }}>
                        </div>
                    )}
                </div>
            </div></>
    );
}