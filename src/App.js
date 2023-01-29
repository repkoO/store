import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import UserInfo from "./pages/UserInfo/UserInfo"
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer"
import NotFound from "./pages/NotFound/NotFound";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (localStorage.getItem("token")) {
    return children;
  }
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
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
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="userinfo" element={<UserInfo />} />
        
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
