
import { motion } from "framer-motion";
import Header from "../components/Header";
const About = () => {
  return (<>
    <Header/>
    <br />
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* תמונה */}
        <motion.img
          src="../../public/img/me.jpg" // ודא שיש לך תמונה בפרויקט
          alt="שירה כהן - מטפלת באבני חן"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-md object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* טקסט */}
        <motion.div 
          className="md:ml-8 mt-6 md:mt-0 text-center md:text-right"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">שירה כהן</h1>
          <p className="text-lg text-gray-600">
            מטפלת באבני חן ואבחונית מוסמכת. למדה שיטות טיפול מתקדמות כמו{" "}
            <span className="text-blue-500 font-semibold">Rebirthing</span>,{" "}
            <span className="text-blue-500 font-semibold">CBT</span>, ועוד.
            למדה אצל{" "}
            <span className="text-blue-500 font-semibold">ד"ר אמיר קוליק</span>{" "}
            במשך שנה.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            מציעה **אבחון באבני חן**, טיפול אנרגטי מותאם אישית, והכוונה
            להתמודדות רגשית דרך כוחם של הקריסטלים.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
    </>);
};

export default About;
