import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext();

useEffect(() => {
  const getConversations = async () => {
    setLoading(true);
    try {
      const token = authUser?.token;
      console.log("Token:", token);
      if (!token) {
        throw new Error("No token found. Please login again.");
      }

      const res = await fetch("https://morning-glory-backend-605u.onrender.com/api/users", {
        method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // ⭐ هنا نضيف هذا الخيار
        });


      if (res.status === 401) {
        throw new Error("Unauthorized. Please login again.");
      }

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setConversations(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  getConversations();
}, [authUser]);


  return { loading, conversations };
};

export default useGetConversations;
