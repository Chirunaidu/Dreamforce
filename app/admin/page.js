"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import  Header  from "../Components/ui/Header";
import { cn } from "../../public/lib/utils";
import  Footey  from "../Components/ui/Footey";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';



// LOGIN COMPONENT IQAC
const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (status === "loading") return; 
    if (session) {
      router.push("/admin/home"); 
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="loader"></div>
      </div>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/auth/verifyadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200) {
        const authRes = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        if (!authRes.error && res.status === 200) {
          toast.success('Logged in successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/admin/home");
        } else {
          toast.error(authRes.error);
        }
      } else if (res.status === 401) {
        toast.error('Invalid email or password', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      toast.error('Server error! Please try again later', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Header className="top-2" />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              DreamForce Admin Login
            </h2>
            <p className="text-gray-500">Sign in to your account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="admin@example.com"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
                placeholder="••••••••"
              />
              <div
                className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="text-gray-500 mt-5" size={20} />
                ) : (
                  <AiOutlineEye className="text-gray-500 mt-5" size={20} />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <Footey/>
      <ToastContainer/>
    </>
  );
};

export default Page;
