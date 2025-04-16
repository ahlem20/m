import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Appointments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Sick ID</th>
              <th className="py-2 px-4 border-b">Doctor ID</th>
              <th className="py-2 px-4 border-b">Deadline</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b text-center">{appointment.sickId}</td>
                <td className="py-2 px-4 border-b text-center">{appointment.doctorId}</td>
                <td className="py-2 px-4 border-b text-center">{appointment.deadline}</td>
                <td className="py-2 px-4 border-b text-center">${appointment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
