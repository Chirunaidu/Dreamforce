'use client';
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminHomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state for smaller screens

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin"); // Redirect to login if not authenticated
    } else if (status === "authenticated") {
      setIsLoading(false); // Once authenticated, stop loading state
    }
  }, [status, router]);

  // If still loading the session or the user is unauthenticated, show the loader
  if (isLoading || status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-sky-100">
        <div className="loader"></div>
      </div>
    );
  }

  // Handle logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/admin" }); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen flex bg-sky-50 relative">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? "block" : "hidden"
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
              className="cursor-pointer font-bold underline transition-transform hover:translate-x-2"
              onClick={() => router.push("/admin/home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer transition-transform hover:translate-x-2 hover:text-yellow-300"
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
          <h2 className="text-3xl font-bold text-sky-700">
            Welcome, {session?.user?.name || "Admin"}!
          </h2>
          <p className="text-gray-600 mt-4">
            Use the options on the left to manage certificates.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminHomePage;
