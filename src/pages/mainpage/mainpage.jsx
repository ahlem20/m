import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { SiImessage } from "react-icons/si";
import "./css.css";

const doctors = [
  {
    name: "د. أحمد كريم",
    specialty: "طبيب قلب",
    description:
      "خبير في تشخيص وعلاج أمراض القلب. يقدم رعاية مخصصة لضمان صحة قلبك.",
    image: "/3.png",
  },
  {
    name: "د. لينا منصور",
    specialty: "طبيبة جلدية",
    description:
      "متخصصة في العناية بالبشرة وعلاجها، وتقدم حلولاً لمجموعة واسعة من الحالات الجلدية.",
    image: "/3.png",
  },
  {
    name: "د. يوسف بشرى",
    specialty: "طبيب أطفال",
    description:
      "مكرس لصحة ورفاهية الأطفال، ويضمن رعاية شاملة للأطفال.",
    image: "/3.png",
  }, {
    name: "د. أحمد كريم",
    specialty: "طبيب قلب",
    description:
      "خبير في تشخيص وعلاج أمراض القلب. يقدم رعاية مخصصة لضمان صحة قلبك.",
    image: "/3.png",
  },
  {
    name: "د. لينا منصور",
    specialty: "طبيبة جلدية",
    description:
      "متخصصة في العناية بالبشرة وعلاجها، وتقدم حلولاً لمجموعة واسعة من الحالات الجلدية.",
    image: "/3.png",
  },
  {
    name: "د. يوسف بشرى",
    specialty: "طبيب أطفال",
    description:
      "مكرس لصحة ورفاهية الأطفال، ويضمن رعاية شاملة للأطفال.",
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
    { question: "ما هي منصة زهرة الفجر للرعاية الصحية؟", answer: "منصة زهرة الفجر تقدم خدمات الرعاية الصحية بسهولة وأمان." },
    { question: "ما هي خدمات منصة زهرة الفجر؟", answer: "خدمات منصة زهرة الفجر تشمل الاستشارات الطبية والاشتراكات الصحية." },
    { question: "هل الاستشارات الطبية مجانية؟", answer: "تختلف حسب نوع الخدمة: بعض الاستشارات مجانية والأخرى برسوم." },
    { question: "كم سعر الاشتراك في خدمات زهرة الفجر للاستشارات الطبية عن بعد؟", answer: "الاشتراك الشهري يبدأ من سعر معين حسب الخدمة المختارة." },
    { question: "هل الاستشارات الطبية عن بعد سرية وآمنة؟", answer: "نعم، جميع الاستشارات مشفرة وآمنة." },
    { question: "كيف يمكن التسجيل في زهرة الفجر؟", answer: "التسجيل يتم عبر موقع زهرة الفجر بسهولة." },
    { question: "كيف يمكنني الحصول على استشارة طبية؟", answer: "يمكنك حجز موعد بسهولة عبر موقع زهرة الفجر أو التطبيق." },
    { question: "هل يمكنني إجراء استشارة طبية عبر الجوال؟", answer: "نعم، يمكنك استخدام تطبيق زهرة الفجر لإجراء استشارات عبر الجوال." },
  ];
  return (
    <div className="bg-white text-greeny min-h-screen w-screen font-sans">
      {/* شريط التنقل */}
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
              <span className="text-sm text-gray-200"> {authUser.fullName} ,مرحبًا</span>
             
              
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-bage px-4 py-2 rounded-lg hover:bg-white transition">
                تسجيل الدخول
              </button>
            </Link>
          )}
            <div>
    <Link to="/fr">
      <button className="bg-white px-4 py-2 rounded-lg hover:bg-bluey transition">
      fr
      </button>
    </Link>
  </div>
        </div> <div className="text-2xl text-bage font-bold">زهرة الفجر</div>
      </motion.nav>

      {/* القسم الرئيسي */}
      <section id="hero" className="flex h-screen bg-bage flex-col md:flex-row pt-14 p-10">
       
        <motion.div
          className="flex-1 mt-8 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            src="https://www.youtube.com/embed/k7x9T5-jAxY"
            title="فلونتلي فيديو"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        <motion.div
          className="flex-1 text-center md:text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
          إبدء <span className="text-greeny hover:underline transition duration-300">من جديد </span>
          </h1>
          <p className="text-lg mt-6 mb-6 text-bluey">
          زهرة الفجر
: منصة تساعدك في النهوض من جديد من أجل مستقبل أفضل
          </p>
          <div className="flex justify-center md:justify-end mt-0 space-x-4">
            <button className="bg-greeny text-bage justify-center hover:bg-bage hover:text-greeny px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              اكتشف المزيد
            </button>
            
          </div>
        </motion.div>
         {/* Down Arrow */}
  <div className="absolute bottom-6 left-0 right-0 mb-14 flex justify-center">
  <motion.button
    className="text-greeny hover:scale-125 text-4xl transform transition"
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
      <section
  id="Mission"
  className="bg-bage text-greeny py-16 px-8"
><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="  rounded-lg  max-w-sm w-full">
            <img
              src="/aa.jpg" // Replace with your video thumbnail
              alt="Fluently app preview"
                className="rounded-lg  h-96"
            />
          </div>
        </div>
        <div>
  <h1 dir="rtl" className="text-4xl md:text-5xl font-bold">
    منصتنا <span className="text-greeny">منفذك للتغيير</span>
  </h1>
  <p dir="rtl" className="mt-6 text-bluey text-lg leading-relaxed">
   <p> منصتنا تقديم استشارات نفسية، أسرية، وزوجية عن بُعد من خلال فريق متخصص من الأخصائيين والاستشاريين المؤهلين. تمتاز المنصة بسهولة الاستخدام، السرية التامة، والأسعار المناسبة، لتكون جسراً بين الخبراء والأفراد الباحثين عن حلول لمشاكلهم النفسية والأسرية، وذلك من أي مكان وفي أي وقت.
              </p>
              <p>
تسعى المنصة إلى سد فجوة كبيرة في السوق، حيث يتم المزج بين التكنولوجيا الحديثة والخدمات الإنسانية، مع التركيز على جودة التفاعل، إضفاء طابع شخصي على الاستشارات، وتقديم أدوات مبتكرة تعزز من فعالية الحلول المقدمة. نحن نؤمن بأن منصة كهذه ليست مجرد مشروع، بل هي رسالة لخلق مجتمع متوازن نفسيًا وأسريًا
</p>  </p>
</div>

      </div>
{/* قسم الإحصائيات */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div>
    <h3 className="text-3xl font-bold">+1000</h3>
    <p className="mt-2 text-greeny">مريض</p>
    <p className="text-sm"> تعالج</p>
  </div>
  <div>
    <h3 className="text-3xl font-bold">+1000</h3>
    <p className="mt-2 text-greeny">مريض</p>
    <p className="text-sm">يتعالج </p>
  </div>
  <div>
    <h3 className="text-3xl font-bold">+10</h3>
    <p className="mt-2 text-greeny">اطباء اكفاء</p>
    <p className="text-sm">والمزيد</p>
  </div>
</div>

    </section>

     {/* قسم الأطباء */}
<section className="bg-white text-greeny py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">
    أطباؤنا <span className="text-green-600">المميزون</span>
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


      <section id="call-to-action" className="bg-gradient-to-r pt-28 to-bluey from-greeny p-10 text-center">
      <motion.h2
  className="text-3xl text-white font-bold mb-4"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  احجز مكالمة مع مؤسسنا!
</motion.h2>

<motion.p
  className="text-lg text-white mb-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  اكتشف كيف يمكن لـ Fluently تحويل طريقتك في تعلم اللغات.
</motion.p>
     <div>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/dzahlem96/new-meeting"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
        </div>
        <section> <div className="bg-gray-50 py-10 px-4 lg:px-20">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
        الأسئلة الأكثر شيوعًا
      </h2>
      <p className="text-center text-gray-500 mb-8">
        اعرف أكثر عن منصة زهرة الفجر وخدمات الرعاية الصحية لفهم كيفية استخدام خدماتنا بكل سهولة.
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
          تواصل معنا
        </button>
      </div>
    </div></section>
    </section>
      <footer className="bg-white p-6 text-center text-sm shadow-inner">
        <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          © 2024  زهرة الفجر. جميع الحقوق محفوظة.
        </motion.p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-greeny">
            شروط الاستخدام
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:text-greeny">
            سياسة الخصوصية
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
