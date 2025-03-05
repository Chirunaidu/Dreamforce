"use client";
import Image from "next/image";
import React, { useState } from "react";
import  Header  from "./Components/ui/Header";
import Footey from "./Components/ui/Footey";
import Head from "next/head";

function page() {
  return (
    <>
    <Header/>
      <div>
          <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Solutions</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div className="flex grid  grid-cols-2  flex-wrap  sm:items-stretch">

              <div className="p-4 flex flex-col h-auto">
                <a href="/solutions/TitleSearch">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/title-search.jpg" alt="content"/>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Title Services</h2>
                    <p className="leading-relaxed text-base mb-4">As a part of Title Search, we conduct Nationwide Title Search to identify Ownership Records, Taxes, Recorded Conveyances, Voluntary/Involuntary Liens and Encumbrances attached to the property.
                    </p>
                    <a href="/solutions/TitleSearch" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                  </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-auto">
                <a  href="/solutions/Salesforce">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/salesforce.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Salesforce Services</h2>
                  <p className="leading-relaxed text-base mb-4">We believe organizations are only as strong as their worst customer experience. Thats why we elevate every moment across the digital journey to not only meet your customer needs...but also surpass them.</p>
                  <a  href="/solutions/Salesforce" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-auto">
                 <a href="/solutions/Dev">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/img-8.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web and App Development Services</h2>
                  <p className="leading-relaxed text-base mb-4">We are happy to introduce about our self, Dreamforce is one of the best web development companies. We provide a full-functioning website that will effectively reach your targeted audience and help increase your companyâ€™s profile in this competitive era.</p>
                  <a href="/solutions/Dev" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-auto">
                <a href="/solutions/Roofing">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/roofing1.png" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Roofing Services</h2>
                  <p className="leading-relaxed text-base mb-4">We are a software company that was built from the ground up to provide solutions to problems we have seen in the roofing industry. We are driven to provide high quality applications for roofers.</p>
                  <a href="/solutions/Roofing" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-auto">
                <a href="/solutions/Staffing">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/staffing.jpg" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Staffing and Recruitment Services</h2>
                  <p className="leading-relaxed text-base mb-4">Helping Organizations Match Great Talent to Great Opportunity.
                  The ability to attract and retain great talent is critical for achieving business goals. That&apos;s why today&apos;s smartest companies are applying proven resources and best practices to ensure they secure the talent they need, quickly and cost-effectively. Allegis Group and its staffing and recruiting companies can provide the best-in-class staffing and recruiting support you need to find the people who will drive your organization&apos;s growth and success.</p>
                  <a href="/solutions/Staffing" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-auto">
                <a href="/solutions/MediTranscription">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-60 rounded w-full object-cover object-center mb-6" src="https://dreamforcetech.com/images/medical.png" alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Medical Transcription Services</h2>
                  <p className="leading-relaxed text-base mb-4">We emphasize on experience and practical expertise. Our Medical Transcription Services team understand healthcare operations in detail and are skilled in medical transcribing knowledge. We have combined the IT and professional transcribers which enable us to create comprehensive transcribing solutions.</p>
                  <a href="/solutions/MediTranscription" className="bg-blue-600 rounded-2xl px-4 py-2 text-white mt-4">Learn More &nbsp;&nbsp;&rarr; </a>
                </div>
                </a>
              </div>

            </div>
          </div>
          </section>
      </div>
    <Footey/>
    </>
  )
}

export default page
