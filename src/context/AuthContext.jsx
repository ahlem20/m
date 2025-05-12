import { createContext, useContext, useEffect, useState } from "react";

// إنشاء السياق
const AuthContext = createContext();

// مزود السياق
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  // تحميل المستخدم من localStorage عند بداية التطبيق
  useEffect(() => {
    const storedUser = localStorage.getItem("chat-user");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// دالة مساعدة للاستخدام في أي مكان
export const useAuthContext = () => useContext(AuthContext);
