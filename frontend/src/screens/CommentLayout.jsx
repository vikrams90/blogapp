import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, postComment } from "../features/comment/commentSlice";
import Commentbox from "../components/Commentbox";

const CommentLayout = ({ blogId }) => {
  const [commentInput, setCommentInput] = useState("");
  const dispatch = useDispatch();
  const { usercomments } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getComment(blogId));
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(
      postComment({
        blog: blogId,
        comment: commentInput,
      })
    );
  };
  if (!usercomments) {
    <>
      <form onSubmit={(e) => handleSubmit(e)} action=''>
        <input
          onChange={(e) => setCommentInput(e.target.value)}
          type='text'
          placeholder='enter comment'
        />
        <button type='submit'>comment</button>
      </form>
      <div>
        <h1 key={"no comments"}>no comments to show</h1>
      </div>
    </>;
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} action=''>
        <input
          onChange={(e) => setCommentInput(e.target.value)}
          type='text'
          placeholder='enter comment'
        />
        <button type='submit'>comment</button>
      </form>
      {
        <ul>
          {usercomments.map((item) => (
            <Commentbox key={item._id} com={item} />
          ))}
        </ul>
      }
    </>
  );
};

export default CommentLayout;
