import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout"; // Ensure the path is correct

const LogoutButton = () => {
  const { loading, logout } = useLogout(); // Custom hook for logout logic

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-white"></span> // Show a spinner while logging out
      )}
    </div>
  );
};

export default LogoutButton;
