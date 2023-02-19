import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Test";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;