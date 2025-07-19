"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          department: "",
          doctor: "",
          message: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (err) {
      alert("Error connecting to server.");
      console.error(err);
    }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Book an Appointment</h3>
      <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-md shadow-md">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Phone & Date */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Department & Doctor */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Dentistry</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Doctor</option>
              <option>Dr. A</option>
              <option>Dr. B</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message (Optional)"
            rows={4}
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
