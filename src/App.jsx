import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./screens/login";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Img from "./components/img";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/welcome/*"
          element={
            <>
              <Welcome />
            </>
          }
        />
        <Route path="welcome/category" element={<Category />} />
        <Route
          path="/nav/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="img" element={<Img />} />
                <Route path="message" element={<Message />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
    // <>
    // <Router>
    //   <Route path="/" element={<Home/>}/>
    // </Router>
    // </>
  );
}

export default App;
