"use client"
import React, { useState } from "react";
import Footey from '../../Components/ui/Footey'

function Salesforce() {
  return (
   <>
          <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Salesforce Services <span className="sm:block"> As A Solution </span>
              </h1>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="/contact">  Get Started</a>
                <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#more">Learn More</a>
              </div>
                <div className="mt-20 flex flex-col justify-center items-center text-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="size-6 animate-shake-up-down">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                    </span>
                </div>
            </div>
          </div>
          </section>

          <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Salesforce Services Now At Attractive And Most Competive Prices Now.
                </h2>

                <p className="hidden text-gray-500 md:mt-4 md:block">
                  We Offer The Best Quality Services As A Solutions, Each Solutions Are Fit And Specially Curated
                  Just For You. We Have The Best Experience In Our Domain. Our Testimonials Shall Be Held As The Result Of Our Work.
                </p>

                <div className="mt-4 md:mt-8">
                  <a href="/contact" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <img
              alt="salesforce Image" src="https://dreamforcetech.com/images/salesforce.jpg"
              className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </section>


          <div className="flex mx-8 w-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 sm:items-stretch w-full">
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col" id="more">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      Salesforce Services
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      We believe organizations are only as strong as their worst customer experience. Thats why we elevate every moment across the digital journey to not only meet your customer needs...but also surpass them.
                     <br/><br/>
                        This experience-forward mentality demands that every action we drive on behalf of your business aligns with this promise and builds customer relationships that endure.
                        <br/><br/>
                        We deliver on this focus by designing and implementing website, ecommerce, and marketing programs powered by analytics & AI to create frictionless, personalized conversations for customers across all departments and channels
                        <br/><br/>
                        Salesforce has revolutionized the way many businesses are being managed in the current society. Different salesforce platforms revive and change businesses to make employees, vendors, and customers one group and team. We are among the top Salesforce development company offering unique Salesforce Development Services such as the development of mobile application for Salesforce1, Force.com, API, Salesforce customization, and third-party application integrations. With using of all technologies and applying the set of best Salesforce standards our Salesforce IoT developers assist organizations in sustaining an enduring bond with clients.
                        <br/><br/>
                        As a Salesforce development company, we are trusted for our Salesforce best practices, its tools, and technologies to create marvelous Salesforce solutions. A team of certified Salesforce experts providing a wide range of software solutions for businesses around the globe - scalable, secure and reliable Salesforce development.
                      </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>
              </div>
          </div>
          
          <Footey/>
    </>

  )
}

export default Salesforce