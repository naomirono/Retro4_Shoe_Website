import React, { useState } from "react";
import Shoe from "../assets/shoe3.JPG";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${Shoe})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-6 bg-white bg-opacity-70 rounded-2xl shadow-5xl border"
      >
        <div className="mb-3 mt-3">
          <label className="font-medium mb-2 flex">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full input-black border rounded-md  border-gray-500 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="font-medium mb-2 flex">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full input-black border rounded-md border-gray-500 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            className="w-full px-3 py-2 border rounded-md  outline-none border-gray-500 focus:border-blue-500 input-black"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>

        <div className="flex justify-center items-center mt-10">
          <a href="https://www.facebook.com/">
            <FaFacebook className="text-blue-700 mx-3" size={24} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="text-pink-500 mx-3" size={24} />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter className="text-blue-500 mx-3" size={24} />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
