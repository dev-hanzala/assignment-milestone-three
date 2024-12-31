"use client";
import React, { useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <div className="pt-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="w-full rounded-md border-2 p-2"
        />
        <button
          onClick={addComment}
          className="mt-2 w-full rounded-md bg-primary px-4 py-2 text-white"
        >
          Post
        </button>
        <div className="flex flex-col gap-2 pt-4">
          {comments.map((comment, index) => (
            <p key={index} className="rounded-md border-2 p-2">
              {comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
