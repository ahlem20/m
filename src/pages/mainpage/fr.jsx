import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { SiImessage } from "react-icons/si";
import "./css.css";
import { MdLanguage } from "react-icons/md";

const doctors = [
  {
    name: "Dr. Ahmed Kareem",
    specialty: "Cardiologist",
    description:
      "Expert in diagnosing and treating heart diseases. Provides personalized care to ensure your heart's health.",
    image: "/3.png",
  },
  {
    name: "Dr. Lina Mansour",
    specialty: "Dermatologist",
    description:
      "Specialized in skin care and treatment, offering solutions for a wide range of dermatological conditions.",
    image: "/3.png",
  },
  {
    name: "Dr. Yousef Bishara",
    specialty: "Pediatrician",
    description:
      "Dedicated to children's health and well-being, ensuring comprehensive care for kids.",
    image: "/3.png",
  },
  {
    name: "Dr. Ahmed Kareem",
    specialty: "Cardiologist",
    description:
      "Expert in diagnosing and treating heart diseases. Provides personalized care to ensure your heart's health.",
    image: "/3.png",
  },
  {
    name: "Dr. Lina Mansour",
    specialty: "Dermatologist",
    description:
      "Specialized in skin care and treatment, offering solutions for a wide range of dermatological conditions.",
    image: "/3.png",
  },
  {
    name: "Dr. Yousef Bishara",
    specialty: "Pediatrician",
    description:
      "Dedicated to children's health and well-being, ensuring comprehensive care for kids.",
    image: "/3.png",
  },
];

function App() {
  const { authUser } = useAuthContext();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What is the Al-Tibbi Healthcare Platform?", answer: "Al-Tibbi Platform provides healthcare services easily and securely." },
    { question: "What services does Al-Tibbi Platform offer?", answer: "Al-Tibbi services include medical consultations and health subscriptions." },
    { question: "Are medical consultations free?", answer: "It depends on the service type: some consultations are free, others require a fee." },
    { question: "What is the price for Al-Tibbi's medical consultation subscription?", answer: "The monthly subscription starts at a specific price based on the chosen service." },
    { question: "Are remote medical consultations confidential and secure?", answer: "Yes, all consultations are encrypted and secure." },
    { question: "How can I register on Al-Tibbi?", answer: "Registration is done easily through the Al-Tibbi website." },
    { question: "How can I get a medical consultation?", answer: "You can easily book an appointment via the Al-Tibbi website or app." },
    { question: "Can I have a medical consultation via mobile?", answer: "Yes, you can use the Al-Tibbi app for mobile consultations." },
  ];
  return (
    <div className="bg-white text-greeny min-h-screen w-screen font-sans">
      {/* Navigation Bar */}
     <motion.nav
  className="flex justify-between items-center p-5 bg-greeny shadow-lg"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
>
  <div className="flex items-center space-x-4">
    {authUser ? (
      <div className="flex items-center space-x-4">
        <Link to="/home">
          <button className="bg-white px-4 py-2 rounded-lg hover:bg-bluey transition">
            <SiImessage size={24} />
          </button>
        </Link>
        <span className="text-sm text-gray-200">Welcome, {authUser.fullName}</span>
      </div>
    ) : (
      <Link to="/login">
        <button className="bg-bage px-4 py-2 rounded-lg hover:bg-white transition">
          Login
        </button>
      </Link>
    )}
  </div>

  <div>
    <Link to="/mainpage">
      <button className="bg-white px-4 py-2 rounded-lg hover:bg-bluey transition">
        ar
      </button>
    </Link>
  </div>
  <div className="text-2xl text-bage font-bold">morning glory</div>

</motion.nav>


      {/* Hero Section */}
      <section id="hero" className="flex h-screen bg-bage flex-col md:flex-row pt-14 p-10">
       
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Start <span className="text-greeny hover:underline transition duration-300">Anew</span>
          </h1>
          <p className="text-lg mt-6 mb-6 text-gray-700">
            morning glory: A platform that helps you rise again for a better future.
          </p>
          <div className="flex justify-center md:justify-start mt-0 space-x-4">
            <button className="bg-greeny text-bage hover:bg-bage hover:text-greeny px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              Discover More
            </button>
          </div>
        </motion.div>
         <motion.div
          className="flex-1 mt-8 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            src="https://www.youtube.com/embed/k7x9T5-jAxY"
            title="Fluently Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        {/* Down Arrow */}
  <div className="absolute bottom-6 left-0 right-0 mb-14 flex justify-center">
  <motion.button
    className="text-greeny hover:scale-125 text-3xl transform transition"
    whileHover={{ y: -10 }}
    onClick={() => {
      const missionSection = document.getElementById("Mission");
      if (missionSection) {
        const offsetTop = missionSection.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }}
  >
    ↓
  </motion.button>
</div>
      </section>

      {/* Mission Section */}
      <section id="Mission" className="bg-bage text-greeny py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="rounded-lg max-w-sm w-full">
              <img src="/aa.jpg" alt="Mission preview" className="rounded-lg h-96" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Platform, <span className="text-greeny">Your Gateway to Change</span>
            </h1>
            <p className="mt-6 text-bluey text-lg leading-relaxed">
              Our platform offers psychological, family, and marital consultations remotely through a specialized team of qualified consultants. It features ease of use, complete confidentiality, and affordable prices, acting as a bridge between experts and individuals seeking solutions for their psychological and family issues, anytime and anywhere.
            </p>
          </div>
        </div>
        {/* قسم الإحصائيات */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div>
    <h3 className="text-3xl font-bold">+1000</h3>
    <p className="mt-2 text-greeny">sick</p>
  </div>
  <div>
    <h3 className="text-3xl font-bold">+1000</h3>
    <p className="mt-2 text-greeny">exempted</p>
  </div>
  <div>
    <h3 className="text-3xl font-bold">+10</h3>
    <p className="mt-2 text-greeny"> doctors</p>
  </div>
</div>
      </section>

      {/* Doctors Section */}
      <section className="bg-white text-greeny py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our <span className="text-greeny">Exceptional Doctors</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-bage rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={doctor.image}
                alt={`${doctor.name} Photo`}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <p className="text-sm mt-2 text-gray-500">{doctor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="call-to-action" className="bg-gradient-to-r from-greeny to-bluey p-10 text-center">
        <motion.h2
          className="text-3xl text-white font-bold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Book a Call with Our Founder!
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover how Fluently can transform your language learning journey.
        </motion.p>
        <div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dzahlem96/new-meeting"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>
 <section> <div className="bg-gray-50 py-10 px-4 lg:px-20">
      {/* Title */}
     <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
  Frequently Asked Questions
</h2>
<p className="text-center text-gray-500 mb-8">
  Learn more about the Al-Tibbi platform and healthcare services to understand how to use our services with ease.
</p>


      {/* FAQ List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 cursor-pointer transition-all duration-300 hover:bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaQuestionCircle className="text-bluey" />
                <span className="font-semibold text-gray-700">{item.question}</span>
              </div>
              <span className="text-gray-400">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="text-center mt-8">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition">
          contact us
        </button>
      </div>
    </div></section>
      {/* Footer */}
      <footer className="bg-white p-6 text-center text-sm shadow-inner">
        <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          © 2024 morning glory. All rights reserved.
        </motion.p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-greeny">
            Terms of Use
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:text-greeny">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
