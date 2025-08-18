import { useEffect, useState, useRef } from "react";
const Carousal = ({ carousalImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef();
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carousalImages.length);
    }, 5000);
  }, [currentIndex]);

  const dotOnClick = (e, idx) => {
    setCurrentIndex(idx);
  };
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img className="max-w-[100%] " src={carousalImages[currentIndex]}></img>

      <div className="flex my-2.5">
        {carousalImages.map((img, idx) => {
          return (
            <div
              key={idx}
              className="w-2.5 h-2.5 bg-black m-1 rounded-xl cursor-pointer"
              style={{
                backgroundColor:
                  idx === currentIndex ? "#0000007f" : "rgba(0, 0, 0, 0.123)",
              }}
              onClick={(e) => dotOnClick(e, idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
