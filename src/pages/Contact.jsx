import React, { useState } from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is Required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Handle successful validation and form submission
        console.log("Form data:", formData);
        setErrors({});
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 pb-10">
      <Helmet>
        <title>Contact me</title>
        <meta
          name="Contact section"
          content="You can reach me by sending a message"
        />
      </Helmet>
      <h1 className="text-center text-2xl font-bold pb-5 pt-5">Contact Me</h1>
      <div className="bg-gray-800 p-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <label className="input input-bordered flex items-center gap-2 w-72">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            {errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>

          <div className="mb-10">
            <label className="input input-bordered flex items-center gap-2 w-72">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-10">
            <textarea
              name="message"
              placeholder="Send a message ... "
              className="rounded-lg w-72 h-28 border-none bg-white"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="text-red-500 text-sm mt-1">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white p-3 rounded-lg mt-10 transform transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:border-b-4 hover:border-green-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
