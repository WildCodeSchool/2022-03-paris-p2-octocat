import { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentForm = () => {
 const MAX_LENGTH = 100;
 const [character, setCharacter] = useState("");
 const maximumReached = character.length >= MAX_LENGTH;
 const numRemaining = MAX_LENGTH - character.length;

 const handleChange = (e) => {
  if (e.target.value.length <= MAX_LENGTH) {
   setCharacter(e.target.value);
  }
 };

 const [name, setName] = useState("");
 const [notation, setNotation] = useState("");
 const [comment, setComment] = useState("");
 const [comments, setComments] = useState([
  {
   name: name,
   notation: notation,
   comment: comment,
  },
 ]);

 const handleSubmit = (e) => {
  e.preventDefault();
  addComments(e);
 };

 const addComments = (e) => {
  const newCommentArr = [...comments];

  const newComment = {};
  newComment.name = name;
  newComment.notation = notation;
  newComment.comment = comment;

  newCommentArr.push(newComment);
  setComments(newCommentArr);

  setName("");
  setNotation("");
  setComment("");
 };

 return (
  <div className="flex">
   <div className="flex flex-col justify-center items-center">
    <div className="flex flex-row"></div>
    <form onSubmit={handleSubmit} className="sm:m-3 flex flex-col sm:w-96 w-72 gap-2">
     <input
      className=" bg-neutral-800 xt-white rounded p-2 w-full text-gray-400 focus:outline-none focus:ring focus:border-red-600"
      type="text"
      name="name"
      placeholder="Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
     <select
      className=" bg-neutral-800 xt-white rounded p-2 w-full text-gray-400 focus:outline-none focus:ring focus:border-red-600"
      type="text"
      onChange={(e) => {
       setNotation(e.target.value);
      }}
     >
      <option stylevalue="">Your notation</option>
      <option value="1">1 star</option>
      <option value="2">2 stars</option>
      <option value="3">3 stars</option>
      <option value="4">4 stars</option>
      <option value="5">5 stars</option>
     </select>
     <textarea
      className={
       maximumReached
        ? "length-maximum-reached bg-neutral-800 rounded p-2 w-full h-56 text-gray-400 focus:outline-none focus:ring focus:border-red"
        : "length-ok bg-neutral-800 rounded p-2 w-full h-56 text-gray-400 focus:outline-none focus:ring focus:border-red"
      }
      type="text"
      name="comment"
      placeholder="Add your comment"
      value={comment}
      onChange={(e) => {
       handleChange(e);
       setComment(e.target.value);
      }}
     />
     <p className="text-gray-400">{numRemaining} remaining characters</p>
     <button
      type="submit"
      className="rounded py-2 px-2 w-full border-transparent bg-red-600 hover:bg-red-800 text-slate-50"
     >
      Post
     </button>
     <div></div>
    </form>

    <ul>
     {comments.slice(1).map((comment, index) => {
      return <Comment comment={comment} key={index} />;
     })}
    </ul>
   </div>
  </div>
 );
};

export default CommentForm;
