import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { deleteBook } from "../Features/BooksSlice";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Hind_Siliguri']">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-green-600 pl-3">
            বইয়ের তালিকা (List of Books)
          </h2>
          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border">
            মোট বই: {books.length} টি
          </span>
        </div>

        {/* রেসপনসিভ কন্টেইনার */}
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            {books.length > 0 && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                      Book Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                      Author Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {books &&
                    books.map((book) => (
                      <tr
                        key={book.id}
                        className="hover:bg-green-50/30 transition-colors duration-150 group"
                      >
                        <td className="px-6 py-4 text-gray-800 font-medium">
                          {book.title}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {book.author}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex gap-2 justify-end items-center">
                            <Link
                              to="/edit-book"
                              state={{
                                id: book.id,
                                title: book.title,
                                author: book.author,
                              }}
                            >
                              <button className="text-xs font-semibold text-cyan-500 hover:text-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                                <MdEditDocument />
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(book.id)}
                              className="text-xs font-semibold text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity text-xl"
                            >
                              <FaDeleteLeft />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {books.length === 0 && (
          <div className="text-center py-20 bg-white mt-4 rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">কোনো বই খুঁজে পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBooks;
