import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FetchBooksView from "./features/fetchBooks/FetchBooksView";
import LibraryView from "./features/library/LibraryView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LibraryView />} />
        <Route path="/search" element={<FetchBooksView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
