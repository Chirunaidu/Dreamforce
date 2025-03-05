'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const ViewCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [isFetching, setIsFetching] = useState(true); 
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin");
    } else if (status === "authenticated") {
      setIsFetching(true);
    }
  }, [status, router]);

  // Fetch certificates
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('/api/auth/getcertificates');
        if (response.ok) {
          const data = await response.json();
          setCertificates(data);
        } else {
          console.error('Failed to fetch certificates.');
        }
      } catch (error) {
        console.error('Error fetching certificates:', error);
      } finally {
        setIsFetching(false);
      }
    };

    if (status === "authenticated") {
      fetchCertificates();
    }
  }, [status]);

  // Handle logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/admin" });
  };

  // Show loader while fetching data or authenticating
  if (status === "loading" || isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-sky-100">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block bg-sky-600 text-white w-64 p-6 space-y-6 fixed lg:relative z-40 shadow-lg`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav>
          <ul className="space-y-6">
            <li
              className="cursor-pointer font-bold transition-transform hover:translate-x-2"
              onClick={() => router.push("/admin/home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer underline transition-transform hover:translate-x-2 hover:text-yellow-300"
              onClick={() => router.push("/admin/viewcertificate")}
            >
              View Certificates
            </li>
            <li
              className="cursor-pointer transition-transform hover:translate-x-2 hover:text-yellow-300"
              onClick={() => router.push("/admin/generatecertificate")}
            >
              Generate Certificates
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 shadow-lg focus:outline-none"
        >
          Logout
        </button>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white rounded-lg shadow-lg">
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden mb-4 text-sky-600 text-2xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          &#9776;
        </button>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            View Certificates
          </h2>
          {certificates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.certificate_id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition duration-300"
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {cert.name}
                  </h2>
                  <p className="text-sm text-gray-600">Course: {cert.course}</p>
                  <p className="text-sm text-gray-500">
                    Certificate ID: {cert.certificate_id}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Issued on: {new Date(cert.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No certificates found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ViewCertificates;
