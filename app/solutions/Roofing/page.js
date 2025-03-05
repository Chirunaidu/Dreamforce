"use client"
import React, { useState } from "react";
import Footey from '../../Components/ui/Footey'

function Roofing() {
  return (
   <>
          <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                Roofing Services

                <span className="sm:block"> As A Solution </span>
              </h1>

              <p className="mx-auto mt-4 w-auto">
              We are a software company that was built from the ground up to provide solutions to problems we have seen in the roofing industry. We are driven to provide high quality applications for roofers.</p>

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
                Roofing Services Now At Attractive And Most Competive Prices Now.
                </h2>

                <p className="hidden text-gray-500 md:mt-4 md:block">
                committed to quality work and Client satisfaction by providing Timely work with Quality and Competitive Prices for your roofing measurements
                </p>

                <div className="mt-4 md:mt-8">
                  <a href="/contact" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <img
              alt="Roofing Services Image" src="https://dreamforcetech.com/images/roofing1.png"
              className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </section>

          <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pt-10">We offer a range of Roofing Services including</h2>
          </header>
          <div className="flex mx-8 w-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols- gap-4 sm:grid-cols-2 sm:items-stretch md:gap-8 w-full">
          <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col col-span-2" id="more">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      Roofing Services
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      We understand the needs of the common roofer and the advanced roofing estimators. We also understand what tools make our lives easier. We infused this knowledge and expertise to allow you to use us to help you grow your business and compete in a rapidly competitive market. </p>
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

export default Roofing