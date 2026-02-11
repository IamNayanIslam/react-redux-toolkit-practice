import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { addBook } from "../Features/BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author) return;

    const newBook = {
      id: Date.now(),
      title: book.title,
      author: book.author,
    };

    dispatch(addBook(newBook));

    setBook({ title: "", author: "" });
    navigate("/show-books", { replace: true });
  };
  return (
    <div className="min-h-screen bg-[#f9fafb] font-['Hind_Siliguri']">
      <Navbar />

      <div className="flex flex-col justify-center items-center py-16 px-6">
        <div className="w-full max-w-lg text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            নতুন বই যুক্ত করুন
          </h2>
          <div className="h-1 w-16 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
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
                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 rounded-2xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 text-gray-700 font-medium"
              />
            </div>

            {/* লেখকের নাম ইনপুট */}
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
                className="w-full px-5 py-4 bg-gray-50 border-transparent border-2 rounded-2xl outline-none focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 text-gray-700 font-medium"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-5 rounded-2xl shadow-xl shadow-gray-200 hover:bg-green-600 hover:shadow-green-200 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                সংরক্ষণ করুন
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          আপনার লাইব্রেরিতে বইগুলো নিরাপদে সংরক্ষিত থাকবে।
        </p>
      </div>
    </div>
  );
};

export default AddBook;
