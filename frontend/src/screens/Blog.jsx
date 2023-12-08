import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { createBlog, updateBlog } from "../features/blog/blogSlice";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
// import DOMPurify from "dompurify";

const Blog = () => {
  const dispatch = useDispatch();
  const [quillData, setQuillData] = useState("");
  const [title, settitle] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const { edit, isError, errorMsg, isPending } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    if (edit.isEdit) {
      setQuillData(edit.blog.article);
      settitle(edit.blog.title);
    }
  }, [edit.isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = user.token;

    if (!edit.isEdit) {
      const data = {
        title: title,
        article: quillData,
        author: user.name,
        user: user._id,
        isPublished: true,
      };
      await dispatch(createBlog({ data, token }));
      navigate("/blog/all");
    }
    if (edit.isEdit) {
      const data = {
        _id: edit.blog._id,
        title: title,
        article: quillData,
        author: user.name,
        user: user._id,
        isPublished: true,
      };
      await dispatch(updateBlog(data));
      navigate("/blog/all");
    }
  };

  const handleChange = async (e) => {
    await settitle(e.target.value);
  };

  const handleText = async (html) => {
    // const sanitizedHTML = DOMPurify.sanitize(html);
    await setQuillData(html);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className='hidden sm:flex flex-col gap-3 py-3 px-5'
      >
        <input
          className='outline-none text-black'
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <ReactQuill
          theme='snow'
          modules={modules}
          formats={formats}
          placeholder='fill your heart out'
          value={quillData}
          onChange={handleText}
          className="hidden sm:block text-black"
        />
        <button className="bg-white text-black dark:bg-black dark:text-white ">Create Blog</button>
      </form>
      <h1 className="sm:hidden block my-12 text-center">please open in desktop to add blog</h1>
      {isError ? <Toast message={errorMsg} type={"error"} /> : <></>}
      <div>{isPending ? <Loader /> : <></>}</div>
    </div>
  );
};

export default Blog;
