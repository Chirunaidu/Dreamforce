'use client';
import React, { useState } from "react";
import Header from "../Components/ui/Header";
import Footey from "../Components/ui/Footey";

function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    const trimmedCertificateId = certificateId.trim();
    try {
      const res = await fetch('/api/auth/verifycertificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId: trimmedCertificateId }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error Response:', errorData);
        throw new Error(errorData.message || 'Certificate not found');
      }
  
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error('Error:', err.message);
      setError(err.message || 'An error occurred');
    }
  };
  

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 via-sky-400 to-sky-600 p-6">
        <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full">
          <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">
            🎓 Certificate Verification
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Enter your certificate number below to check its authenticity.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="certificateId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Certificate Number
              </label>
              <input
                type="text"
                id="certificateId"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm p-3"
                placeholder="e.g., 123aab45-1234-567c-890d1-23456789efgh"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white py-3 px-4 rounded-lg font-semibold shadow-lg transition-all"
            >
              Verify Certificate
            </button>
          </form>
          {error && (
            <div className="mt-6 text-sm text-red-600 text-center font-medium">
              {error}
            </div>
          )}
          {result && (
            <div className="mt-6 bg-sky-50 border border-sky-200 rounded-lg p-6 text-center shadow-md">
              <h2 className="text-xl font-semibold text-sky-700">
                ✅ Certificate Verified
              </h2>
              <p className="text-gray-600 mt-4">
                <strong>Name:</strong> {result.name}
              </p>
              <p className="text-gray-600">
                <strong>Course:</strong> {result.course}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footey />
    </>
  );
}

export default VerifyCertificatePage;
