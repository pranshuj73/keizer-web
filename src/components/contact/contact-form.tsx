"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [project, setProject] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!company.trim()) newErrors.company = "Company is required";
    if (!project.trim()) newErrors.project = "Project description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", { name, email, company, project });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pt-[60px]">
      <div className="mb-6">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="NAME"
          className="w-full md:py-[30px] py-[20px] placeholder:text-white/50 bg-transparent border-b border-white text-white placeholder-white uppercase focus:outline-none"
        />
        {errors.name && (
          <p className="text-white text-sm flex items-center gap-3 pt-2  mt-1">
            {" "}
            <span className="h-[10px] aspect-square rounded-full bg-red-500 w-[10px] inline-block"></span>{" "}
            {errors.name}
          </p>
        )}
      </div>
      <div className="mb-6">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="EMAIL"
          className="w-full md:py-[30px] py-[20px] bg-transparent border-b placeholder:text-white/50 border-white text-white placeholder-white uppercase focus:outline-none"
        />
        {errors.email && (
          <p className="text-white text-sm  flex items-center gap-3 pt-2 mt-1">
            {" "}
            <span className="h-[10px] aspect-square rounded-full bg-red-500 w-[10px] inline-block"></span>{" "}
            {errors.email}
          </p>
        )}
      </div>
      <div className="mb-6">
        <input
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          placeholder="COMPANY"
          className="w-full md:py-[30px] py-[20px] bg-transparent border-b placeholder:text-white/50 border-white text-white placeholder-white uppercase focus:outline-none"
        />
        {errors.company && (
          <p className="text-white text-sm  flex items-center gap-3 pt-2 mt-1">
            {" "}
            <span className="h-[10px] aspect-square rounded-full bg-red-500 w-[10px] inline-block"></span>{" "}
            {errors.company}
          </p>
        )}
      </div>
      <div className="mb-6">
        <textarea
          onChange={(e) => setProject(e.target.value)}
          placeholder="PROJECT"
          rows={1}
          className="w-full md:py-[30px] py-[20px] pr-[20px] bg-transparent border-b placeholder:text-white/50 border-white text-white placeholder-white uppercase focus:outline-none"
        />
        {errors.project && (
          <p className="text-white text-sm flex items-center gap-3 pt-2  mt-1">
            {" "}
            <span className="h-[10px] aspect-square rounded-full bg-red-500 w-[10px] inline-block"></span>{" "}
            {errors.project}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="md:text-[18px] text-[15px] md:h-[50px] md:w-[177px] w-full h-[45px] group flex items-center justify-center placeholder:text-white/50 text-white bg-black rounded-[4px] mt-[60px]"
      >
        <span className="mr-2">SEND</span>
        <ArrowRight
          size={20}
          className="group-hover:translate-x-1 transition-all"
        />
      </button>
    </form>
  );
};

export default ContactForm;
