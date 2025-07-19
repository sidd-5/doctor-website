"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [appointments, setAppointments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Protect route
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login");
    } else {
      fetchAppointments();
    }
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/form");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      alert("Failed to load data");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointment Dashboard</h1>
      <table className="min-w-full border bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Doctor</th>
            <th className="p-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{a.name}</td>
              <td className="border p-2">{a.email}</td>
              <td className="border p-2">{a.phone}</td>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">{a.department}</td>
              <td className="border p-2">{a.doctor}</td>
              <td className="border p-2">{a.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
