import { useState } from "react";
import chakraData from "../data/chakras"; // קובץ JSON נפרד עם פרטי כל צ'קרה
import chakraImg from "../assets/img/medi.jpg"; // התמונה שהעלית

const ChakraMap = () => {
  const [activeChakra, setActiveChakra] = useState<number | null>(null);

  return (
    <div className="relative max-w-md mx-auto mt-6">
      <img src={chakraImg} alt="מדיטציה עם צ'קרות" className="w-full rounded-xl shadow-lg" />
      
      {chakraData.map((chakra, index) => (
        <div
          key={chakra.name}
          className="absolute w-6 h-6 rounded-full opacity-0 hover:opacity-100 cursor-pointer"
          style={{
            top: chakra.top,
            left: "44%",
            transform: "translateX(-50%)",
            backgroundColor: chakra.color,
          }}
          onMouseEnter={() => setActiveChakra(index)}
          onMouseLeave={() => setActiveChakra(null)}
        >
          {activeChakra === index && (
            <div className="absolute bottom-full mb-2 w-44 text-sm bg-white bg-opacity-90 text-gray-800 p-2 rounded shadow-md text-center z-50">
              <strong>{chakra.name}</strong>
              <div>{chakra.stones.join(", ")}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChakraMap;
