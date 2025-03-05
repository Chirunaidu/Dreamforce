"use client"
import React, { useState } from "react";
import Header from '../Components/ui/Header'
import Footey from '../Components/ui/Footey'

function Why() {
  return (
    <div>
        <Header/>
          <section className="bg-white">
      <div className="px-6 py-10">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">why Choose<br/> <span className="underline decoration-blue-500">DreamForce Technologies </span></h1>
          <p className="mt-4 text-gray-900 text-xl xl:mt-6">
              The List Is Not Limited, Still We Have Noted A Few Below For Your Consideration...
          </p>

          <div className="grid grid-cols-2 text-center sm:grid-cols-1 w-full gap-4 lg:gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              
              <div className="space-y-3 border-2 rounded-lg p-6 hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Reduced Operational Cost</h1>

                  <p className="text-gray-500">
                  Up to 50% reduction in operational cost. Our prices are very competitive and will be based on service agreements and there will be no hidden charges. We will obtain your approval when there are changes to the quoted price</p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Improved Turn-Times and Accuracy</h1>

                  <p className="text-gray-500">
                  Up to 40% reduction in TAT, leveraging smart and innovative technology and achieve near-zero error rates. We always put in all efforts to efficiently deliver all completed orders as quickly as possible without affecting the Clients TAT and keeping in mind the Quality.
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                  </svg>
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Flexibility</h1>

                  <p className="text-gray-500">
                  Flexibility to scale work during peak times. We are available to you via phone and email detailed on our website. We will be available to work 24/7 throughout the year.
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Confidentiality and Privacy</h1>

                  <p className="text-gray-500">
                    100% data confidentiality assured
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Efficiencies</h1>

                  <p className="text-gray-500">
                    Our internal systems and workflows are built to provide efficiencies to all our stakeholders
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn mMre</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                  </svg>

                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Transparency</h1>

                  <p className="text-gray-500">
                  We maintain transparency across all our operations
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>

              {/* <div className="space-y-3 border-2 rounded-lg p-6  hover:bg-blue-100">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize ">Strong Communication</h1>

                  <p className="text-gray-500">
                  For us, strong communication is a big part of every business relationship. We are available to you via phone and email detailed on our website.
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div> */}

              <div className="space-y-3 border-2 rounded-lg p-6 col-span-2 text-center hover:bg-blue-100 lg:col-span-3 md:col-span-2 col-span-1">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full  dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>



                  </span>

                  <h1 className="text-xl font-bold text-gray-700 capitalize">Already Bored?</h1>

                  <p className="text-gray-500">
                    We Already Told You We Have The List Of Reasons To Choose Us Over Other Which Is Not Limited.....
                  </p>

                  <a href="/contact" className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <span className="mx-1">Learn More</span>
                      <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
          </div>

      </div>
          </section>

          <section className="bg-gray-100 lg:py-12 lg:flex lg:justify-center m-4 ">
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md rounded-xl">
                <div className="lg:w-1/2 md:w-1/2 w-full sm:w-full">
                    <img className="h-40 bg-cover h-full" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Still Have Any&nbsp;<span className="text-blue-500">Doubts?</span>
                    </h2>

                    <p className="my-8 text-white font-leading">
                        No Need To Worry. Our Specialised, Dedicated and Higlly Trained Staff, Can Help You Out Of The Problems 
                        You Have Related To Us. Get In Touch With Us Anytime By Clicking On The Below Button.
                    </p>

                    <div className="inline-flex w-full mt-10 sm:w-auto">
                        <a href="/contact" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
          </section>
        <Footey/>
    </div>
  )
}

export default Why