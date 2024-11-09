import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./index.css";
import { useFormik } from "formik";
import { BlogCreate } from "../redux/BlogSaga/BlogActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const QuillEditor = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            content: ""
        }, onSubmit: (values) => {
            values = {content: content};
            dispatch(BlogCreate(values));
        }
    })


    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ background: "black", padding: "20px", marginLeft: "75px" }}>
                    <ReactQuill
                        theme='snow'
                        formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']}
                        placeholder="Write something amazing..."
                        modules={modules}
                        onChange={(e) => setContent(e)}
                        value={content}
                    />

                    <div>
                        <h2 className="text-xl font-bold flex justify-center mt-8">Preview</h2>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: 'flex-end', paddingRight: '25px' }}>
                    <div><input type="submit" value="Submit" /></div>
                </div>
            </form>
        </>
    );
};

export default QuillEditor;