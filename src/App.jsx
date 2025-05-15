import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/singup/Singup";
import Mainpage from "./pages/mainpage/mainpage";
import Fr from "./pages/mainpage/fr";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // Wait for localStorage hydration
  useEffect(() => {
    setLoading(false); // When context loads, set loading to false
  }, [authUser]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <Routes>
        {/* Redirect root to mainpage */}
        <Route path="/" element={<Navigate to="/mainpage" />} />

        {/* Protected Route */}
        <Route path="/home" element={authUser ? <Home /> : <Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/fr" element={<Fr />} />
        <Route path="/login" element={authUser ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/home" /> : <SignUp />} />
      </Routes>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
