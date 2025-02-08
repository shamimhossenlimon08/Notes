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
      <div className="w-full h-screen  bg-[rgba(225,225,225,0.8)] fixed top-0 left-0 flex items-center justify-center  ">
        <div className="w-[78%] relative bg-white shadow-md rounded-md p-5 box-border sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-1/3">
          <div>
            <h1 className="text-xl font-mono font-bold text-center pb-3 sm:text-2xl md:text-3xl">
              Update Yours Notes
            </h1>
            <div
              className=" w-7 h-7 bg-slate-300 rounded-full flex justify-center items-center absolute top-1  right-1 sm:right-2  cursor-pointer sm:w-8 sm:h-8 md:w-9 md:h-9 "
              onClick={() => setVisible(false)}
            >
              <RxCross2 />
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
              placeholder="Discription"
              onChange={(e) => setEditDiscription(e.target.value)}
              className="w-full border border-blue-300 rounded-sm p-2 mt-3 h-24 resize-none outline-none sm:h-32 md:h-36 lg:h-28 "
            ></textarea>
            <button
              onClick={handleEdit}
              className="bg-slate-400 px-2.5 py-2 rounded-md mt-3 text-lg text-center sm:px-4 sm:py-2 md:px-8 md:py-3"
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
