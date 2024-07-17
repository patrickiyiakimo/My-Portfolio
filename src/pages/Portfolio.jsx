import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Portfolio = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setDetails(data);
          setLoading(false);
        }, 3000);
      });
  }, []);

  if (loading) {
    return (
      <SkeletonTheme baseColor="#0202" highlightColor="#708090">
        <div className="pb-10 bg-gray-900">
          <h1 className="text-center text-2xl font-bold pt-5">
            <Skeleton width={200} />
          </h1>
          <div className="md:grid md:grid-cols-2 gap-10 px-20 pt-10">
            {[...Array(4)].map((_, index) => (
              <div
                className="card bg-gray-800 shadow-2xl mb-10 pt-10 h-full text-gray-400"
                key={index}
              >
                <figure className="px-10 pt-10">
                  <Skeleton height={70} width={300} />
                </figure>
                <div className="card-body bg-gray-600 rounded-lg items-center text-center">
                  <h2 className="card-title underline">
                    <Skeleton width={150} />
                  </h2>
                  <p>
                    <Skeleton count={2} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <div className="pb-10 bg-gray-900">
      <h1 className="text-center text-2xl font-bold pt-5">My Portfolio</h1>
      <div className="md:grid md:grid-cols-2 gap-10 px-20 pt-10">
        {details.map((detail) => (
          <div
            className="card bg-gray-800 shadow-2xl mb-10 pt-10 h-full text-gray-400"
            key={detail._id}
          >
            <figure className="px-10 pt-10">
              {detail.image ? (
                <img
                  src={detail.image}
                  alt="project image"
                  className="rounded-xl"
                />
              ) : (
                <Skeleton height={200} width={300} />
              )}
            </figure>
            <div className="hover:text-green-300 transform transition-transform duration-500 ease-in-out hover:-translate-y-6 hover:border-b-4 hover:border-green-300 card-body bg-gray-600 rounded-lg items-center text-center">
              <h2 className="card-title underline">
                <a href="/">{detail.title}</a>
              </h2>
              <p>{detail.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
