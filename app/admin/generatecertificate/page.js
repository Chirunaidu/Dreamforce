'use client';

import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { v4 as uuidv4 } from "uuid";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const GenerateCertificate = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [generated, setGenerated] = useState(false);
  const [certificateId, setCertificateId] = useState("");
  const [pdfDoc, setPdfDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin");
    } else if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status, router]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin" });
  };

  if (isLoading || status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-sky-100">
        <div className="loader"></div>
      </div>
    );
  }

  const handleGenerate = () => {
    if (!name || !course) {
      alert("Please fill in all fields.");
      return;
    }

    const newCertificateId = uuidv4();
    setCertificateId(newCertificateId);
    const doc = new jsPDF();
    const drawGradientBackground = () => {
      const gradientHeight = 297;
      const step = gradientHeight / 20;

      for (let i = 0; i < 20; i++) {
        const colorValue = Math.floor(255 - i * 12);
        doc.setFillColor(224, 247, 250);
        doc.rect(0, step * i, 210, step, 'F');
      }
    };

    drawGradientBackground();

    doc.setFont("times", "bold");
    doc.setFontSize(28);
    doc.setTextColor(0, 51, 102);
    doc.text("Internship Completion Certificate", 105, 40, { align: "center" });

    doc.setLineWidth(2);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 50, 190, 50);

    doc.setFont("times", "italic");
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text("To Whomsoever It May Concern", 105, 70, { align: "center" });

    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`This is to certify that ${name}`, 105, 100, { align: "center" });
    doc.text(`has successfully completed the internship program`, 105, 120, { align: "center" });
    doc.text(`for the course "${course}"`, 105, 140, { align: "center" });
    doc.text(`Certificate ID: ${newCertificateId}`, 105, 160, { align: "center" });


    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Throughout the internship, ${name} demonstrated excellent skills in`, 105, 180, { align: "center" });
    doc.text(`task execution, teamwork, and problem-solving, contributing significantly`, 105, 195, { align: "center" });
    doc.text(`to the success of the project.`, 105, 210, { align: "center" });

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`We wish ${name} the best of luck in future endeavors.`, 105, 225, { align: "center" });

    doc.setLineWidth(1);
    doc.setDrawColor(0, 51, 102);
    doc.line(20, 250, 190, 250);

    doc.setFontSize(10);
    doc.setFont("times", "italic");
    doc.setTextColor(128, 128, 128);
    doc.text("Issued by [Company Name]", 105, 265, { align: "center" });
    doc.text("[Company Contact Information]", 105, 275, { align: "center" });

    setPdfDoc(doc);
    setGenerated(true);
  };

  
  const handleSave = async () => {
    if (!name || !course || !certificateId) {
      alert("Please generate the certificate first.");
      return;
    }

    try {
      const response = await fetch("/api/auth/savecertificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          course,
          certificateId,
        }),
      });

      if (response.ok) {
        alert("Certificate saved successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to save certificate: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error saving certificate:", error);
      alert("An error occurred while saving the certificate.");
    }
  };

  const handleDownload = () => {
    if (pdfDoc) {
      pdfDoc.save("certificate.pdf");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
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
              className="cursor-pointer font-bold transition-transform hover:translate-x-2"
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
              className="cursor-pointer underline transition-transform hover:translate-x-2 hover:text-yellow-300"
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
      <main className="flex-1 flex justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-sky-600 text-center mb-6">
            Generate Certificate
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-base focus:ring focus:ring-sky-300"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Course
              </label>
              <input
                type="text"
                placeholder="Enter course name"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-base focus:ring focus:ring-sky-300"
              />
            </div>
            <button
              onClick={handleGenerate}
              className="w-full bg-sky-600 text-white py-2 text-base rounded-lg hover:bg-sky-700 transition"
            >
              Generate Certificate
            </button>
          </div>

          {generated && (
          <div className="mt-6 text-center">
            <p className="text-green-600 font-semibold">
              Certificate generated successfully!
            </p>
            <p className="text-sm text-gray-500">
              Certificate ID: {certificateId}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handleDownload}
                className="bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition"
              >
                Download Certificate
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Save Certificate
              </button>
            </div>
          </div>
        )}

        </div>
      </main>
    </div>
  );
};

export default GenerateCertificate;
