import React, { useEffect } from "react";

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
    <div className="mb-10">
      {details.map((detail) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-2xl mb-10 flex ml-20 mt-10"
            key={detail._id}
          >
            <figure className="px-10 pt-10">
              <img
                src={detail.image}
                alt="project image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title underline ">
                <a href="/">{detail.title}</a>
              </h2>
              <p>{detail.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
