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
    <section className="relative min-h-screen flex items-center justify-center transition-colors duration-500">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Contact Details */}
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6 bg-blue-600 bg-clip-text text-transparent">
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
                style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className={`p-10 rounded-3xl shadow-lg backdrop-blur-sm animate-slideIn transform transition-all duration-500 relative z-20 ${
            darkMode
              ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20"
              : "bg-gradient-to-br from-blue-100 to-purple-100"
          }`}
        >
          <h3
            className={`text-4xl font-bold mb-8 text-center bg-gradient-to-r ${
              darkMode
                ? "from-blue-300 to-purple-300"
                : "from-blue-600 to-purple-600"
            } bg-clip-text text-transparent`}
          >
            Contact Me
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className={`mb-3 font-medium tracking-wide ${
                    darkMode ? "text-white/90" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "bg-white/5 border-2 border-white/20 focus:border-white/40 text-white placeholder-white/40 hover:border-white/30"
                      : "bg-white border-2 border-gray-200 focus:border-blue-400 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  }`}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className={`mb-3 font-medium tracking-wide ${
                    darkMode ? "text-white/90" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? "bg-white/5 border-2 border-white/20 focus:border-white/40 text-white placeholder-white/40 hover:border-white/30"
                      : "bg-white border-2 border-gray-200 focus:border-blue-400 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  }`}
                  required
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className={`mb-3 font-medium tracking-wide ${
                  darkMode ? "text-white/90" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-white/5 border-2 border-white/20 focus:border-white/40 text-white placeholder-white/40 hover:border-white/30"
                    : "bg-white border-2 border-gray-200 focus:border-blue-400 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                }`}
                rows="6"
                required
                placeholder="Your message"
              />
            </div>
            <div className="text-center pt-4">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`px-10 py-4 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 rounded-lg font-semibold shadow-md text-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-blue-500 hover:bg-blue-600 text-gray-100"
                      : "bg-blue-600 hover:bg-blue-700 text-gray-100"
                  }`}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
            {successMessage && (
              <p className="text-emerald-300 text-center mt-4 font-medium animate-fadeIn bg-emerald-900/20 py-3 rounded-lg">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-300 text-center mt-4 font-medium animate-fadeIn bg-red-900/20 py-3 rounded-lg">
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
