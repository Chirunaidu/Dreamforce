import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';

function Review() {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      autoSlideInterval.current = setInterval(() => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.next();
        }
      }, 3000);

      return () => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.destroy();
        }
      };
    }
  }, []);

  const handlePrev = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.prev();
    }
  };

  const handleNext = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.next();
    }
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read trusted reviews from our clients
            </h2>
            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                onClick={handlePrev}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNext}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider flex flex-nowrap overflow-hidden gap-2">
                <div className="keen-slider__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/2">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                    <div className="flex gap-0.5 text-green-500">
                        {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Our Client</p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                        Dreamforce technologies helped us achieve a good scalability and hence improving the efficiency in our process.
                        </p>
                    </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Our Client
                    </footer>
                </blockquote>
                </div>

                <div className="keen-slider__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/2">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                    <div className="flex gap-0.5 text-green-500">
                        {[...Array(4)].map((_, index) => (
                        <svg
                            key={index}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Our Private Customer</p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                        I Gave My Personal Freelancer Work to Dreamforce, and they made it possible in my difficult times.
                        </p>
                    </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Kumar
                    </footer>
                </blockquote>
                </div>

                <div className="keen-slider__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/2">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                    <div className="flex gap-0.5 text-green-500">
                        {[...Array(4)].map((_, index) => (
                        <svg
                            key={index}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Our Client</p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                        Dreamforce Technologies helped in increasing our efficiency and thier well trained and talented staff out sourcing process was quick as jiffy.
                        </p>
                    </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Our Client
                    </footer>
                </blockquote>
                </div>
            </div>
           </div>

        </div>
      </section>
    </div>
  );
}

export default Review;
