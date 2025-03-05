"use client";
import React, { useState } from "react";
import Header from '../Components/ui/Header'
import Footey from '../Components/ui/Footey'
import { Label } from "../Components/ui/Label.jsx";
import { Input } from "../Components/ui/Input";
import { cn } from "../../public/lib/utils";
import { ToastContainer, toast } from 'react-toastify';


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    firstname: e.target.firstname.value,
    lastname: e.target.lastname.value,
    email: e.target.email.value,
    message: e.target.Message.value,
  };

  if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
    toast.error('All fields are required.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
    return;
  }

  try {
    const response = await fetch('/api/auth/triggermail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      toast.success(data.message || 'Email sent successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      e.target.reset(); 
    } else {
      const errorData = await response.json();
      toast.error(errorData.message || 'An error occurred. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Error submitting form, please contact admin.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  }
};


const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};



const Contact = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-white lg:flex my-10 mx-4 rounded-lg">
        <div className="flex flex-col justify-center w-full lg:p-8 bg-white text-black lg:px-12 xl:px-32 lg:w-1/2 ">
          <p className="font-medium text-blue-500 text-6xl">Contact us</p>
          <p className="my-8 text-black lg:pl-4">We&apos;d love to hear from you. Please fill out this form or shoot us an email.</p>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-2 lg:pl-4">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
              <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
              <a href="mailto:admin@DreamForce.in" className="mt-2 text-sm text-blue-500">admin@DreamForce.in</a>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Live chat</h2>
              <p className="mt-2 text-sm text-gray-500">Our whatsapp Number is:</p>
              <a href="https://wa.me/reminder_to_setup_later" className="mt-2 text-sm text-blue-500">+91 91234 56789</a>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
              <p className="mt-2 text-sm text-gray-500">Come say hello at our office.</p>
              <p className="mt-2 text-sm text-blue-500">No.10, 4th Main, 4th Cross
                Naidu Layout, Arehalli, Bangalore, KA, India</p>
                
                <a   href="https://maps.app.goo.gl/G1kTDnTq9dGDn9Wq6"  className="block lg:hidden md:hidden my-4 text-base font-medium text-white rounded justify-center align-center text-center px-4 py-2 bg-blue-500">View on Google Maps</a>
              
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
              <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
              <p className="mt-2 text-sm text-blue-500">+91 12345 67890</p>
            </div>

            <div className="w-max">
              
              <p className="mt-4 mb-4 text-base font-medium text-gray-800 hidden lg:block">
                No Worries, Here You Go!!
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8406479035907!2d77.54199327484041!3d12.917961487392501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f048c121263%3A0xa134b98c56c2f01b!2sDreamforce%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1732543138133!5m2!1sen!2sin"
                title="Seeing an overlap? No Worries! That Was Intentional And It Was A Design Aesthetic"
                className="rounded-2xl w-100 h-200 overflow-hidden hidden lg:block"
                height={450}
                loading="lazy"
                width={600} 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>

        <div className="flex flex-col lg:mt-12 w-full lg:p-4 md:p-8 lg:w-1/2 lg:px-12 xl:px-24 rounded-lg">
          <div className="lg:max-w-xl w-full lg:mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black">
            <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
              Welcome to DreamForce Technologies
            </h2>
            <p className="text-neutral-600 text-lg max-w-sm mt-2 dark:text-neutral-300">
              we are here to hear you out, Hence Don&apos;t hesitate to shout on us.😁
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
              <div
                className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Ex: Elon" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Ex: Musk" type="text" required />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="Ex: Hello@there.com" type="email" required />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Message">Message</Label>
                <Input id="Message" placeholder="Write Anything Here" type="text" className="h-40" required />
              </LabelInputContainer>


              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit">
                Contact&nbsp;&nbsp;&rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footey />
      <ToastContainer/>
    </>
  )
}



export default Contact;