import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
const login = async (username, password) => {
  const success = handleInputErrors(username, password);
  if (!success) return;
  setLoading(true);

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    // تحقق من حالة الاستجابة قبل محاولة تحليل JSON
    if (!res.ok) {
      throw new Error("Login failed: " + (await res.text())); // طباعة نص الاستجابة في حالة فشلها
    }

    // إذا كانت الاستجابة صحيحة، حاول تحليلها
    const data = await res.json();
    const { token, user } = data;

    if (!token || !user) {
      throw new Error("Invalid login response from server");
    }

    // تخزين المستخدم والتوكن معًا
    const authUser = { ...user, token };
    localStorage.setItem("chat-user", JSON.stringify(authUser));
    setAuthUser(authUser);
    toast.success("Login successful");
  } catch (error) {
    console.error("Error during login:", error);
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

  return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
