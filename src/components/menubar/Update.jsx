import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNote } from "../../features/NoteSlice";
const Update = ({
  setVisible,
  editTitle,
  setEditTitle,
  editDiscription,
  setEditDiscription,
  editId,
}) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const updateValues = {
      id: editId,
      title: editTitle,
      discription: editDiscription,
      createAt: new Date().toString(),
    };
    setEditTitle("");
    setEditDiscription("");
    dispatch(updateNote(updateValues));

    setVisible(false);
  };
  return (
    <>
      <div className="w-full h-screen bg-[rgba(225,225,225,0.8)] fixed top-0 left-0 flex items-center justify-center  ">
        <div className="w-1/3 bg-white shadow-md rounded-md p-5 box-border ">
          <div>
            <div className="relative">
              <h1 className="text-3xl font-mono font-bold text-center pb-3">
                Update Yours Notes
              </h1>
              <div
                className="w-9 h-9 bg-slate-300 rounded-full flex justify-center items-center absolute top-0 right-2 cursor-pointer"
                onClick={() => setVisible(false)}
              >
                <RxCross2 />
              </div>
            </div>

            <input
              value={editTitle}
              type="text"
              placeholder="title"
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full border border-blue-300 rounded-sm p-2 outline-none"
            />
            <textarea
              value={editDiscription}
              maxLength={400}
              rows={4}
              placeholder="Discription"
              onChange={(e) => setEditDiscription(e.target.value)}
              className="w-full border border-blue-300 rounded-sm p-2 mt-3 resize-none outline-none"
            ></textarea>
            <button
              onClick={handleEdit}
              className="bg-slate-400 px-8 py-3 rounded-md mt-3 text-lg text-center"
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
