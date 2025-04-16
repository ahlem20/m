import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const Sidebar = () => {
    const [time, setTime] = useState("");
    const [deadline, setDeadline] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [fetchingAppointments, setFetchingAppointments] = useState(false);
 
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("https://morning-glory-backend.onrender.com/api/users/appointments/");
        setAppointments(response.data.appointments);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading appointments...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const sendRequest = async (url, method = "POST", body = null, successMessage = "") => {
        setLoading(true);
        setError("");
        setMessage("");

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : null,
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (!response.ok) throw new Error(data.message || "Request failed");

            if (method === "GET") {
                console.log("Fetched Appointments:", data);
                setAppointments(data);
            }

            setMessage(successMessage);
            if (method === "POST") resetFields();
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (!deadline || !time || !price) {
            setError("Please fill in all fields: date, time, and price.");
            return;
        }

        const combinedDateTime = `${deadline}T${time}`;
        sendRequest(
            "https://morning-glory-backend.onrender.com/api/users/purchase/",
            "POST",
            {
                sickId: authUser?._id,
                doctorId: selectedConversation?._id,
                deadline: combinedDateTime,
                price,
            },
            "Purchase successful!"
        );
    };

    const fetchAppointments = async () => {
        setFetchingAppointments(true);
        setError("");

        try {
            const response = await fetch("https://morning-glory-backend.onrender.com/api/users/appointments/", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Failed to fetch appointments.");

            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error.message);
            setError("Unable to load appointments.");
        } finally {
            setFetchingAppointments(false);
        }
    };

    const resetFields = () => {
        setDeadline("");
        setTime("");
        setPrice("");
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex">
  {selectedConversation && (
    <div className="bg-slate-500 text-gray-900 w-96 min-h-screen border-r border-slate-500 p-4 flex flex-col items-center">
      {selectedConversation.role === "doctor" ? (
        <>
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 mt-10">
            <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-greeny shadow-lg">
              <img
                src={selectedConversation.profilePic}
                alt="user avatar"
                className="object-cover"
              />
            </div>
            <p className="text-lg font-bold text-greeny mt-2">
              {selectedConversation.fullName}
            </p>
          </div>

          {/* Form Inputs */}
          <div className="w-full overflow-y-auto max-h-[300px] p-2">
            <div className="w-full mt-4">
              <label className="block text-sm font-bold mb-2" htmlFor="deadline">
                Deadline Date
              </label>
              <input
                type="date"
                id="deadline"
                className="w-full px-3 py-2 border rounded-md text-gray-800"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <label className="block text-sm font-bold mb-2" htmlFor="time">
                Deadline Hour
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-3 py-2 border rounded-md text-gray-800"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <p className="text-sm font-bold mb-2">Select a Price</p>
              {["500", "1000", "1500"].map((value) => (
                <label key={value} className="flex items-center mt-2">
                  <input
                    type="radio"
                    name="price"
                    value={value}
                    className="mr-2"
                    checked={price === value}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {value} DA
                </label>
              ))}
            </div>

            <button
              className="btn bg-bage w-full mt-4"
              onClick={handleSubmit}
            >
              Submit Purchase
            </button>
          {/* Appointments Table */}
            <div className="overflow-y-auto max-h-[400px] mt-6">
             <h1 className="flex justify-center text-greeny">my deadlines:</h1>
            <table className="min-w-full bg-white border-collapse border border-gray-300 shadow-lg rounded-lg">
              <thead>
                <tr className="bg-bage text-bluey">
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                    Deadline
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                    Price (DA)
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                    edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-sky-100 transition duration-200`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {new Date(appointment.deadline).toLocaleString("en-US", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        })}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {appointment.price}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                       <button className="bg-greeny rounded-lg px-4">edit</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="py-6 text-center text-gray-500 text-sm"
                    >
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          </div>

        </>
      ) : (
        <>
          {/* Non-Doctor Role Table */}
          <div className="container mx-auto p-6 overflow-y-auto max-h-[600px]">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Appointments
            </h1>
            <div className="overflow-y-auto max-h-[400px]">
              <table className="min-w-full bg-white border-collapse border border-gray-300 shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-sky-500 text-white">
                    <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Deadline
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Price (DA)
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold uppercase tracking-wide">
                      Accept
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.length > 0 ? (
                    appointments.map((appointment, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-sky-100 transition duration-200`}
                      >
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {new Date(appointment.deadline).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            }
                          )}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {appointment.price}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="py-6 text-center text-gray-500 text-sm"
                      >
                        No appointments found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Success/Error Messages */}
      {message && <div className="mt-4 text-green-500">{message}</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  )}
</div>

    );
};

export default Sidebar;
