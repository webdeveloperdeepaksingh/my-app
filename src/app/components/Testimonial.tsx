"use client";
import React from "react";
import Container from "./Container";

const testimonials = [
  {
    name: "Puneet Luthra",
    role: "Real Estate Agent, Greater Noida",
    message: "Deepak transformed our website into a modern, responsive platform. His attention to detail and creative vision are unmatched.",
    image: "/images/puneet.jpg", // Add your local or remote image paths
  },
  {
    name: "Gourav Saraf",
    role: "Company Seceratory, Kolkata",
    message:"I needed a portfolio and Deepak delivered beyond expectations. Clean code, great design, and smooth delivery.",
    image: "/images/gourav.png",
  },
  {
    name: "Anurag Chhabra",
    role: "Management, Bangluru",
    message:"Deepak delivered an outstanding LMS website that's fast and intuitive. His clean design, and reliable support made the entire process smooth and hassle-free. Highly recommend his development expertise!",
    image: "/images/anurag.jpg",
  },
  // {
  //   name: "Vikram Joshi",
  //   role: "E-commerce Owner",
  //   message:
  //     "Our online store is now faster, better-looking, and easier to use. Deepak did a phenomenal job from start to finish.",
  //   image: "/avatars/vikram.jpg",
  // },
  // {
  //   name: "Vikram Joshi",
  //   role: "E-commerce Owner",
  //   message:
  //     "Our online store is now faster, better-looking, and easier to use. Deepak did a phenomenal job from start to finish.",
  //   image: "/avatars/vikram.jpg",
  // },
  // {
  //   name: "Vikram Joshi",
  //   role: "E-commerce Owner",
  //   message:
  //     "Our online store is now faster, better-looking, and easier to use. Deepak did a phenomenal job from start to finish.",
  //   image: "/avatars/vikram.jpg",
  // },
];

const Testimonial : React.FC = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-black"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">“{testimonial.message}”</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
