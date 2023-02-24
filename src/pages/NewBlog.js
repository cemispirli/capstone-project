import React, { useState } from "react";
import { useBlog } from "../contexts/BlogContextProvider";
import { useAuth } from "../contexts/AuthContextProvider";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../helpers/ToastNotify";

const NewBlog = () => {
  const { currentUser } = useAuth();
  const [newBlog, setNewBlog] = useState({
    author: currentUser.displayName || currentUser.email.split("@")[0],
    title: "",
    content: "",
    image: "",
    published_date: Date.now(),
  });
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const newBlogHandler = (e) => {
    e.preventDefault();
    try {
      addBlog(newBlog);
      // console.log(newBlog);
      navigate("/");
      toastSuccessNotify("Blog added successfully!");
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(currentUser);
  // console.log("currentBlogs", currentBlogs);

  return (
    <div style={{ marginTop: 40 }}>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        newBlogHandler={newBlogHandler}
      />
    </div>
  );
};

export default NewBlog;
