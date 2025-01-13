import { useNavigate } from "react-router-dom";

const logout = () => {
  setAuthUser(null);
  navigate("/login"); // Redirect to login
};
