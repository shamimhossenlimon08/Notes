import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNote } from "../features/NoteSlice";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const dispatch = useDispatch();

  const handleNote = () => {
    if (title !== "" && discription !== "") {
      const newNote = {
        id: Date.now().toString(32),
        title,
        discription,
        createAt: new Date().toString(),
      };

      setTitle("");
      setDiscription("");
      dispatch(addNote(newNote));
      toast.success("Successfully added", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("please fill in the blank", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer toastClassName="w-[220px] mt-3 mr-3 rounded sm:w-[300px] sm:mt-1 sm:mr-0" />
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-[78%]  bg-white shadow-md rounded-md p-4 box-border sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-1/3 ">
          <div>
            <h1 className="text-xl  font-mono font-bold text-center pb-3 sm:text-2xl md:text-3xl">
              Add Create Notes
            </h1>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-blue-300 rounded-sm p-2 outline-none"
            />
            <textarea
              maxLength={400}
              placeholder="Discription"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              className="w-full border border-blue-300 rounded-sm p-2 mt-3 h-24 resize-none outline-none sm:h-32 md:h-36 lg:h-28 }"
            ></textarea>
            <button
              onClick={handleNote}
              className="bg-slate-400 px-2.5 py-2 rounded-md mt-3 text-lg text-center sm:px-8 sm:py-3"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
