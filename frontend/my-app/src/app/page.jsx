// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [form, setForm] = useState({ department: '', doctor: '', date: '', location: '' });

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow bg-white">
        <h1 className="text-xl font-bold text-blue-800">Nova Super Specialist Hospital</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Service</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </nav>
        <a href="/form" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Book Appointment</a>

{/* Go to Dashboard Button */}
<button
  type="button"
  onClick={() => window.location.href = "/dashboard"}
  className=" bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200 mt-2"
>
  Go to Dashboard
</button>


      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-white">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Treatments for a Healthy Lifestyle</h2>
          <p className="text-gray-600 mb-4">
            Seamlessly advance scalable architectures with future-ready growth strategies. Efficiently implement low-risk, high-return process enhancements tailored for mission-critical testing procedures.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2">
            View Our Hospital <AiOutlineArrowRight />
          </button>
          <div className="mt-6 flex items-center gap-2 border rounded-md p-2 w-full md:w-96">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Search the Medical" className="outline-none w-full" />
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <Image src="/doctor.png" alt="Doctor" width={400} height={400} />
          <span className="absolute top-0 right-0 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">2500+ Doctors Online</span>
        </div>
      </section>

      {/* Stats */}
      <section className="flex justify-around bg-gray-100 py-8 text-center text-gray-700">
        <div>
          <p className="text-xl font-bold">4500+</p>
          <p>Happy Patients</p>
        </div>
        <div>
          <p className="text-xl font-bold">200</p>
          <p>Hospital Room</p>
        </div>
        <div>
          <p className="text-xl font-bold">500+</p>
          <p>Award Win</p>
        </div>
        <div>
          <p className="text-xl font-bold">20+</p>
          <p>Ambulance</p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="bg-blue-100 py-6 px-4 flex flex-wrap justify-center gap-4">
        {['Department', 'Doctor', 'Date', 'Location'].map((field, idx) => (
          <select key={idx} className="px-4 py-2 rounded-md text-gray-700">
            <option>Select {field}</option>
          </select>
        ))}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Search</button>
      </section>

      {/* Department Icons */}
      <section className="text-center py-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Department Category</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-1.jpg" alt="Nephrology" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-2.jpg" alt="Cardiology" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-3.jpg" alt="Pulmonology" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-4.jpg" alt="Dentistry" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-5.jpg" alt="Neurology" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-6.jpg" alt="Orthopedics" width={40} height={40} />
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <Image src="/departments/dep-7.jpg" alt="ENT" width={40} height={40} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-50 py-10 px-6 lg:px-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">World-Class Healthcare Services for you and your loved ones</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Emergency Services", desc: "24/7 immediate medical care for critical conditions..." },
            { title: "Radiology & Imaging", desc: "Advanced diagnostic imaging services including X-ray, CT scan, MRI..." },
            { title: "Laboratory Services", desc: "Comprehensive lab testing for blood, urine, and other samples..." },
            { title: "Pharmacy", desc: "In-house medical store providing prescribed medications..." },
          ].map((service, i) => (
            <div key={i} className="bg-white p-4 rounded-md shadow">
              <h4 className="font-bold mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">More Service</button>
        </div>
      </section>
    </main>
  );
}
