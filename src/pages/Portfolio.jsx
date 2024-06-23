// import React, { useEffect } from "react";
// // import background from "../images/galaxy.webp";

// const Portfolio = () => {
//   const [details, setDetails] = React.useState([]);

//   useEffect(() => {
//     fetch("/details.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setDetails(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div className="pb-10 bg-black">
//       {details.map((detail) => {
//         return (
//           <div
//             className="card w-96 bg-base-100 shadow-2xl mb-10 flex ml-20 pt-10"
//             key={detail._id}
//           >
//             <figure className="px-10 pt-10">
//               <img
//                 src={detail.image}
//                 alt="project image"
//                 className="rounded-xl"
//               />
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title underline ">
//                 <a href="/">{detail.title}</a>
//               </h2>
//               <p>{detail.body}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Portfolio;

import React, { useEffect } from "react";
// import background from "../images/galaxy.webp";

const Portfolio = () => {
  const [details, setDetails] = React.useState([]);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="pb-10 bg-gray-900">
      <div className="grid grid-cols-2 gap-10 px-20 pt-10">
        {details.map((detail) => {
          return (
            <div
              className="card bg-gray-800 shadow-2xl mb-10 pt-10 h-full"
              key={detail._id}
            >
              <figure className="px-10 pt-10">
                <img
                  src={detail.image}
                  alt="project image"
                  className="rounded-xl"
                />
              </figure>
              <div className="hover:text-green-300 transform transition-transform duration-500 ease-in-out hover:-translate-y-6 hover:border-b-4 hover:border-green-300 card-body bg-gray-600 rounded-lg items-center text-center">
                <h2 className="card-title underline">
                  <a href="/">{detail.title}</a>
                </h2>
                <p>{detail.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
