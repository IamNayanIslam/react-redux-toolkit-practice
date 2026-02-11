import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ShowBooks from "../Pages/ShowBooks";
import AddBook from "../Pages/AddBook";
import EditBook from "../Pages/EditBook";
import Footer from "../Components/Footer";

const Index = () => {
  return (
    <>
      <main>
        <div className="min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
              <Route path="/show-books" element={<ShowBooks />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/edit-book" element={<EditBook />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Index;
