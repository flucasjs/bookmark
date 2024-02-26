"use client";
import React from "react";

export default function ContactForm() {
  const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className="flex pt-0 md:py-[60px] flex-col text-center text-white bg-color-primary">
      <div className="self-center max-w-[45ch]">
        <span className="text-[0.75rem] leading-[3.33] tracking-[4.62px] uppercase lg:text-[0.8125rem] lg:leading-[3.08]">
          35,000+ already joined
        </span>
        <h3 className="mb-[42px] text-[1.5rem] leading-[1.167] -tracking-[0.08px] font-medium lg:text-[2rem] lg:leading-[1.25] lg:-tracking-[0.1px]">
          Stay up-to-date with what we’re doing
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 lg:flex-row lg:gap-y-0 lg:justify-center"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="h-12 py-[10px] px-[20px] rounded-[5px] lg:text-[0.875rem] lg:leading-[2] tracking-[0.25px] flex-1 basis-[60%] text-color-secondary"
          />
          <button
            type="submit"
            className="flex-1 basis-[25%] bg-color-accent border-2 border-transparent hover:bg-white hover:text-color-accent hover:border-color-accent py-[10px] rounded-[5px] text-[0.875rem] leading-[2] tracking-[0.25px] lg:px-6 shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] transition-colors duration-100 ease-in-out font-medium"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
