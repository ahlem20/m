// SocketContext.js
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const token = localStorage.getItem("token");
			if (!token) {
				console.warn("No token found in localStorage");
				return;
			}

			const newSocket = io("https://morning-glory-backend.onrender.com", {
				auth: {
					token,
					userId: authUser._id,
				},
				transports: ["websocket"],
				withCredentials: true,
			});

			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => newSocket.close();
		} else if (socket) {
			socket.close();
			setSocket(null);
		}
	}, [authUser]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
