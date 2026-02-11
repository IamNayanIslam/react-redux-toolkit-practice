import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../Features/BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    id: location.state?.id,
    title: location.state?.title || "",
    author: location.state?.author || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Hind_Siliguri']">
      <Navbar />

      <div className="flex flex-col justify-center items-center py-16 px-6">
        <div className="w-full max-w-lg text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            বইয়ের তথ্য পরিবর্তন করুন
          </h2>
          <p className="text-gray-500 mt-2">আইডি: {book.id}</p>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15_rgba(0,0,0,0.05)] border border-gray-100">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative group">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">
                Book Title
              </label>
              <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="যেমন: History of Bangladesh"
                required
                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 rounded-2xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-700 font-medium"
              />
            </div>

            <div className="relative group">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block ml-1">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                required
                placeholder="যেমন: Nayan Islam"
                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 rounded-2xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-700 font-medium"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                আপডেট করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
