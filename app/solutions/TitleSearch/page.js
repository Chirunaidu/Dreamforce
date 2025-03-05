"use client"
import React, { useState } from "react";
import Footey from '../../Components/ui/Footey'

function TitleSearch() {
  return (
   <>
          <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                Title Search

                <span className="sm:block"> As A Solution </span>
              </h1>

              <p className="mx-auto mt-4 w-auto">
              A title is an abstract concept that signifies one or more individuals own the property listed on the face of the title. 
              State laws vary regarding exact procedures for effectively recording title to property; 
              however, a majority of states agree that each transfer of title must be recorded in a county recorder&apos;s office for an owner to hold valid title. Before you purchase a property, confirm that the seller holds valid title to the property. A title insurance company will search the property&apos;s title index for you for a fee, or you can visit a county recorder&apos;s office and search the title index.
              </p>

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
                  Title Search Your Property Now At Attractive And Most Competive Prices Now.
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
              alt="Title Search Image" src="https://cdn.pixabay.com/photo/2024/05/09/19/16/ai-generated-8751655_640.jpg"
              className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </section>

          <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pt-10">We offer a range of title search reports including</h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            These Are The List Few Title Search Services We Offer.
          </p>
          </header>
          <div className="flex mx-8 w-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8" id="more">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:gap-8 w-full">
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      1. Current/One Owner Search/Property Report/Ownership and Encumbrance Report
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      A search that goes back to the FVD and each deed in the chain that was recorded since the FVD must be reviewed to verify that the title passes to the current owner of record. The names of the grantees in the FVD and all subsequent title holders must be run for Mortgages/Deed of Trusts, general liens, such as judgments and federal tax liens for the full statutory period applicable for that state. If a party is listed on a refinance order that does not appear on the FVD, then the name(s) must be run for liens and judgments like any other owner.
                      <br/><br/>
                      In addition, all defects, liens, and encumbrances specifically referred to in the documents revealed in the search must be reported as exceptions, unless properly disposed of. Where the subject property is located in an area where mineral conveyances and reservations are common, all such conveyances and reservations must be specifically excepted from the legal description.
                      </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      2. Two Owner Search/Pre-Foreclosure Search
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      A search that goes back to the two FVD and each deed in the chain that was recorded since the FVD must be reviewed to verify that the title passes to the current owner and two owners of record.
                      <br/><br/>
                      The names of the grantees in the FVD&apos;s (current owner & two owners) and all subsequent title holders must be run for Mortgages/Deed of Trusts, general liens, such as judgments and federal tax liens for the full statutory period applicable for that state. If a party is listed on a refinance order that does not appear on the FVD, then the name(s) must be run for liens and judgments like any other owner.
                      <br/><br/>
                      In addition, all defects, liens, and encumbrances specifically referred to in the documents revealed in the search must be reported as exceptions, unless properly disposed of. Where the subject property is located in an area where mineral conveyances and reservations are common, all such conveyances and reservations must be specifically excepted from the legal description.
                      </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      3. Full Search (F/S)
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      The length of search that is defined by state statute as the full applicable statutory period required for marketable title or the customary standard in the state where the property is located.
                      </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto flex flex-col">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      4. Bring Down/Date Down/Update Search
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      Extension of a title search to verify that no liens have been filed against the subject property between the time of the original title search and the recording of the Security Instrument and or Mortgage/Deed of Trust. The taxes should be updated with present tax findings.
                      </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      5. Deed Search
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      Deed Search is checking the Full Value Deed to Start the Search, and to provide Chain of Title.</p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      6. Legal and Vesting Report
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      Provides the fully typed legal description of the property, vesting information and is accompanied by the recorded deed image.</p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>
                
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      7. Mortgage & Deed of Trust Search
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      To Check Open Mortgages / Deed of Trust which is related to given property, and Additional Documents which include Assignment, Modification, Subordination, Substitution of Trustee, and upload the search docs in the file.</p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      8. Tax Search
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      We provide comprehensive solutions on real estate Tax information for insured and uninsured products with widespread coverage in the United States and quick turn times.
                      <br/>
                       <span className="font-semibold"> There are two different sources to get the taxes information:</span>
                       <br/> <span className="font-semibold"> Online:</span> For Some States, we can access the Tax Information through County Tax Collectors online website (By using Netronline)

                        <br/> <span className="font-semibold">Call:</span> Calls are made to relevant County Assessors and Tax Collectors Office to get the taxes information.</p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      9. Title Commitment
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      A title commitment is a document that lists the details surrounding a property that is to be mortgaged. It lists the various requirements, exceptions, and exclusions related to issuing title insurance on a property. It also functions as a promise to issue title insurance on a property if all stipulations in Section B of the title commitment are met. A title commitment also lets the buyer know about a property&apos;s possible peculiarities, such as any right-of-way existing on the property or a third-party ruling body such as a condo association.
                        </p>
                    </div>
                    <a href="/contact" className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500">
                      Know More
                    </a>
                </div>

                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 h-auto">
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-900 bg-gray-100 py-4 w-full rounded-2xl">
                      10. Title Examination
                      </h2>
                      <p className="mt-2 sm:mt-4">
                      Title examination is a close examination of all public records that affect the title to the real estate you are purchasing. The search involves reviewing past deeds, wills, and trusts to make sure the title has passed correctly to each new owner. The examiner tries to verify that all prior mortgages, judgments, and other liens have been paid in full.
                        <br/><br/>
                      Defective title refers to a title to real property which is invalid because a claimed prior holder of the title did not have title, or there is an inaccurate description of the property, or some other &quot;cloud&quot; over it, which may or may not be learned from reading the deed. To avoid a defective title problem, a purchaser will often research the chain of title</p>
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

export default TitleSearch