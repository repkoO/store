import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { UserInfo } from "./pages/UserInfo/UserInfo"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { NotFound } from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";


export const App = () => {
  const location = useLocation()
  const {token} = useSelector(state => state.user)

  if (!token) {
    if(location.pathname === '/' || location.pathname === '/userinfo') {
      return <Navigate to={'/login'} />
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          index
          element={
              <Home />
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