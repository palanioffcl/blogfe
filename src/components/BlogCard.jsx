import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { BlogReq } from '../redux/BlogSaga/BlogActions';
import { setAuthToken } from '../Utils/axios';

export const BlogCard = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const blogs = useSelector((state) => state.blogs.blogs);
    const loading = useSelector((state) => state.blogs.loading); // Assuming you have a loading state
    const error = useSelector((state) => state.blogs.error); // Assuming you have an error state

    useEffect(() => {
        if (!blogs) {
            setAuthToken(token);
            dispatch(BlogReq());
        }
    }, [blogs]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>; // Display any error that occurs
    }

    // Ensure blogs is an array before mapping
    if (!Array.isArray(blogs) || blogs.length === 0) {
        return <div>No blogs available</div>;
    }

    return (
        <div className='TodoCard'>
            {blogs.map((blog, index) => (
                <div key={index} className='MainTodoCard'>
                    <h3>{blog.heading}</h3>
                    <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/<[^>]*>/g, '').slice(0, 250) + '....' }}></div>
                    <div style={{alignContent: 'flex-end'}}>
                        <a href={import.meta.env.VITE_HOST_URL.concat('blog/',blog._id)}> Read More.</a>
                    </div>
                </div>
            ))}
        </div>
    );
};
