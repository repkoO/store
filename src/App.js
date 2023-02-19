import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import UserInfo from "./pages/UserInfo/UserInfo"
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer"
import NotFound from "./pages/NotFound/NotFound";


const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};




function App() {
 
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="userinfo" element={<UserInfo />} />
        
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
