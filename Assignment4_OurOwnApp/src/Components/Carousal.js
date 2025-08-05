import { useEffect, useState, useRef } from "react";
import "../Styles/Carousal.css";
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
    <div className="carousalContainer1">
      <img className="carousalItems" src={carousalImages[currentIndex]}></img>

      <div className="dotsContainer">
        {carousalImages.map((img, idx) => {
          return (
            <div
              key={idx}
              className="dots"
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
