import { formatDistance } from "date-fns";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/NoteSlice";
import { useState } from "react";
import Update from "../components/menubar/Update";

const Notes = () => {
  const initialShow = 6;
  const [next, setNext] = useState(initialShow);
  const [visible, setVisible] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDiscription, setEditDiscription] = useState("");
  const [editId, setEditId] = useState();

  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };

  const handleUpdate = (item) => {
    setVisible(true);
    setEditTitle(item.title);
    setEditDiscription(item.discription);
    setEditId(item.id);
  };
  if (visible) {
    return (
      <Update
        setVisible={setVisible}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editDiscription={editDiscription}
        setEditDiscription={setEditDiscription}
        editId={editId}
      />
    );
  }
  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>

      <div className="container ">
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {notes.slice(0, next).map((item) => (
            <div
              className="px-7 py-3 bg-white shadow-md sm:px-6 md:px-6 lg:px-4"
              key={item.id}
            >
              <h3 className="font-bold text-xl font-mono">{item.title}</h3>
              <p className="font-normal text-lg font-sans ">
                {item.discription}
              </p>
              <span className="font-mono text-base text-slate-500 ">
                {formatDistance(item.createAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <div className="flex items-center justify-end gap-x-4 ">
                <button
                  className="bg-red-500 text-white px-3 py-1   rounded-md cursor-pointer hover:bg-amber-950 transition-all sm:px-4 sm:py-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-emerald-500 text-white px-3  py-1 rounded-md cursor-pointer hover:bg-slate-600 transition-all sm:px-4 sm:py-2"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {notes.length > next && (
          <div className="text-center mt-5">
            <button
              className="px-4 py-2 bg-cyan-800 text-white font-mono rounded-md"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
