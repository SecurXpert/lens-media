"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
    contactMethods: {
      email: false,
      phone: false,
      whatsapp: false,
    },
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Name should contain letters only";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format";
    }

    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be exactly 10 digits";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.subject)) {
      newErrors.subject = "Subject should contain letters only";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 200) {
      newErrors.message = "Message should be maximum 200 characters";
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleContactMethodChange = (method) => {
    setFormData((prev) => ({
      ...prev,
      contactMethods: {
        ...prev.contactMethods,
        [method]: !prev.contactMethods[method],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="px-6 pb-3">
      <div className="max-w-4xl mx-auto bg-[linear-gradient(135deg,rgba(29,41,61,0.5)_0%,rgba(15,23,43,0.5)_100%)] border border-[#243455] p-10 rounded-xl">
        <p className="text-2xl text-center font-orbitron tracking-wide mb-2 text-[#FE9A00]">
          Contact <span className="text-[#FE9A00]">Form</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          {/* FULL NAME */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2 font-inter">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="📥 Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className={`w-full bg-[#16243d] p-3 rounded border ${
                  errors.fullName ? "border-red-500" : "border-[#2a3b5f]"
                } text-white placeholder-gray-500`}
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-300 mb-2 font-inter">
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="📥 you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full bg-[#16243d] p-3 rounded border ${
                  errors.email ? "border-red-500" : "border-[#2a3b5f]"
                } text-white placeholder-gray-500`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-gray-300 mb-2 font-inter">
                Phone Number (Optional)
              </label>

              <input
                type="text"
                placeholder="📥 10 digits only"
                value={formData.phone}
                maxLength={10}
                onChange={(e) =>
                  handleInputChange("phone", e.target.value.replace(/\D/g, ""))
                }
                className={`w-full bg-[#16243d] p-3 rounded border ${
                  errors.phone ? "border-red-500" : "border-[#2a3b5f]"
                } text-white placeholder-gray-500`}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-gray-300 mb-2 font-inter">
                Subject <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="📥 Subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`w-full bg-[#16243d] p-3 rounded border ${
                  errors.subject ? "border-red-500" : "border-[#2a3b5f]"
                } text-white placeholder-gray-500`}
              />

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-gray-300 mb-2 font-inter">
              Your Message <span className="text-red-500">*</span>
            </label>

            <textarea
              placeholder="📥 How can we assist you"
              rows={4}
              maxLength={200}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full bg-[#16243d] p-3 rounded border ${
                errors.message ? "border-red-500" : "border-[#2a3b5f]"
              } text-white placeholder-gray-500`}
            />

            <div className="flex justify-between items-center">
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <span className="text-gray-400 text-sm">
                {formData.message.length}/200
              </span>
            </div>
          </div>

          {/* PREFERRED CONTACT METHOD */}
          <div>
            <label className="block text-gray-300 mb-3 font-inter">
              Preferred Contact Method
            </label>

            <div className="space-y-2">
              <label className="flex items-center text-gray-300 font-inter">
                <input
                  type="checkbox"
                  className="mr-2 accent-[#FE9A00]"
                  checked={formData.contactMethods.email}
                  onChange={() => handleContactMethodChange("email")}
                />
                Email
              </label>

              <label className="flex items-center text-gray-300 font-inter">
                <input
                  type="checkbox"
                  className="mr-2 accent-[#FE9A00]"
                  checked={formData.contactMethods.phone}
                  onChange={() => handleContactMethodChange("phone")}
                />
                Phone
              </label>

              <label className="flex items-center text-gray-300 font-inter">
                <input
                  type="checkbox"
                  className="mr-2 accent-[#FE9A00]"
                  checked={formData.contactMethods.whatsapp}
                  onChange={() => handleContactMethodChange("whatsapp")}
                />
                WhatsApp
              </label>
            </div>
          </div>

          {/* TERMS */}
          <div>
            <label className="flex items-start text-gray-300 font-inter">
              <input
                type="checkbox"
                className={`mr-2 mt-1 ${
                  errors.agreeToTerms ? "accent-red-500" : "accent-[#FE9A00]"
                }`}
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  handleInputChange("agreeToTerms", e.target.checked)
                }
              />

              <span className="text-sm">
                I agree to the privacy policy and terms of service. My
                information will be kept confidential and used only for
                responding to my inquiry.
              </span>
            </label>

            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full bg-[#4A5565] text-[#FFFFFF] font-inter py-3 rounded hover:bg-[#E58900] transition font-inter flex items-center justify-center gap-2"
          >
            <FaPaperPlane size={18} />
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
