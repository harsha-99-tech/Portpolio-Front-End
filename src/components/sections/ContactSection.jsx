import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

const ContactSection = () => {
  const { darkMode } = useTheme();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailjsConfig, setEmailjsConfig] = useState(null);

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_API_BASE_URL;
    if (!backendUrl) {
      console.error("Backend URL is missing!");
      setErrorMessage("Server configuration missing.");
      return;
    }

    const fetchEmailjsConfig = async () => {
      try {
        const response = await fetch(`${backendUrl}/emailjs-config`);
        if (!response.ok)
          throw new Error("Failed to fetch EmailJS configuration");

        const config = await response.json();
        console.log("Received EmailJS Config:", config);

        setEmailjsConfig(config);
      } catch (error) {
        console.error("Error fetching EmailJS config:", error);
        setErrorMessage("Failed to load email configuration.");
      }
    };

    fetchEmailjsConfig();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!emailjsConfig) {
      setErrorMessage("Email configuration is missing.");
      setIsSending(false);
      return;
    }

    console.log("Sending Email with Data:", formData);

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      console.log("SUCCESS!", result);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setErrorMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center py-20 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            darkMode ? "bg-blue-700" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-30 ${
            darkMode ? "bg-pink-700" : "bg-pink-300"
          }`}
        ></div>
      </div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Contact Details */}
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            Have a question or project in mind? Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span className="text-lg">harshanawana@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
              <FaPhoneAlt className="text-green-500 text-2xl" />
              <span className="text-lg">+94 76 164 6525 | +94 72 517 2343</span>
            </div>

            <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <span className="text-lg">Nawana, Nikaweratiya</span>
            </div>

            <div className="w-full h-56 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Nikaweratiya`}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className={`p-8 rounded-2xl shadow-2xl backdrop-blur-sm animate-slideIn transform hover:scale-[1.01] transition-all duration-300 ${
            darkMode ? "bg-blue-900/80" : "bg-blue-600/90"
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Contact Me</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/60 text-white transition-all duration-300 placeholder-white/50"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/60 text-white transition-all duration-300 placeholder-white/50"
                  required
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-white mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:border-white/60 text-white transition-all duration-300 placeholder-white/50"
                rows="5"
                required
                placeholder="Your message"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
            {successMessage && (
              <p className="text-green-300 text-center mt-4 font-medium animate-fadeIn">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-300 text-center mt-4 font-medium animate-fadeIn">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
