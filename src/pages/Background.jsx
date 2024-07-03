import React from "react";

const Background = () => {
  return (
    <div className="bg-gray-900 text-gray-400 ">
      <h1 className="text-center text-gray-800 text-2xl font-bold  pt-5">My Background</h1>
      <div className=" pt-20 pb-10 text-center md:flex md:items-center md:justify-center gap-96">
        <h4 className="text-2xl font-bold">Companies I have Worked With</h4>
        <h4 className="hidden md:block md:text-2xl md:font-bold">Education</h4>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"></ul>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start mb-10 md:text-end bg-gray-800 p-10 ml-10 rounded-lg hover:bg-gray-700 hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">03/2024 - Present</time>
            <p className="font-mono italic">Frontend Engineer</p>
            <p className="font-mono italic">Lagos, Nigeria</p>
            <div className="text-lg font-black">DotCampus Africa</div>
            DotCampus is a tech community that offers exceptional tutoring,
            mentorship and guided learning for the next generation of software
            engineers
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden md:block timeline-end mb-10 md:mr-10 bg-gray-800 p-10 rounded-lg hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">Ihiagwa Secondary School</div>
            SSCE
            <p className="font-mono italic">Owerri, Imo state, Nigeria</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-800 p-10 ml-10 rounded-lg hover:bg-gray-700 hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">04/2024 – 06/2024</time>
            <p className="font-mono italic">Frontend Engineer</p>
            <p className="font-mono italic">Mumbai, India</p>
            <div className="text-lg font-black">Harsh Gupta</div>
            Harsh Gupta offers mentorship for interested and aspired software
            engineers
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden  md:block timeline-end mb-10  bg-gray-800 p-10 rounded-lg hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">2021</time>
            <p className="font-mono italic">Estate Management And Valuation</p>
            <div className="text-lg font-black">
              Federal Polytechnique Nekede Owerri
            </div>
            Diploma
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-800 p-10 ml-10 rounded-lg hover:bg-gray-700 hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">11/2023 – 06/2024</time>
            <p className="font-mono italic">Frontend Engineer</p>
            <p className="font-mono italic">Ikeja Lagos, Nigeria</p>
            <div className="text-lg font-black">FlaveConsole</div>
            An all-encompassing restuarant food order and delivery solution.
            Customers enjoy seamless browsing of menus, easy ordering, and
            real-time tracking of their deliveries, ensuring satisfaction with
            every meal.
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-800 p-10 ml-10 rounded-lg hover:bg-gray-700 hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">08/2023 – 11/2024</time>
            <p className="font-mono italic">Frontend Engineer</p>
            <p className="font-mono italic">Owerri, Nigeria</p>
            <div className="text-lg font-black">BCH Onboarding</div>
            Designed and developed an e-commerce website for a furniture company
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end bg-gray-800 p-10 ml-10 rounded-lg hover:bg-gray-700 hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
            <time className="font-mono italic">03/2022 – 12/2023</time>
            <p className="font-mono italic">Frontend Engineer</p>
            <p className="font-mono italic">Owerri, Nigeria</p>
            <div className="text-lg font-black">Uptrust Team</div>
            Deisgned a web application that shortens long URL's
          </div>
        </li>
      </ul>

      <div className="text-center text-2xl font-bold p-10 md:hidden">
        <p>Education</p>
      </div>
      <div className="md:hidden">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />{" "}
                <div className="hidden md:block timeline-end mb-10 md:mr-10 bg-gray-800 p-10 rounded-lg hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
                  <time className="font-mono italic">2018</time>
                  <div className="text-lg font-black">
                    Ihiagwa Secondary School
                  </div>
                  SSCE
                  <p className="font-mono italic">Owerri, Imo state, Nigeria</p>
                </div>
              </svg>
            </div>
            <div className=" md:block timeline-end mb-10  bg-gray-800 p-10 rounded-lg hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black">Ihiagwa Secondary School</div>
              SSCE
              <p className="font-mono italic">Owerri, Imo state, Nigeria</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="  md:block timeline-end mb-10 md:mr-10 bg-gray-800 p-10 rounded-lg hover:text-green-300 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-b-4 hover:border-green-300">
              <time className="font-mono italic">2021</time>
              <p className="font-mono italic">
                Estate Management And Valuation
              </p>
              <div className="text-lg font-black">
                Federal Polytechnique Nekede Owerri
              </div>
              Diploma
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Background;
