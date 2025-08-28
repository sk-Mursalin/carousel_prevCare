import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { features } from "./utils/data";

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, []);

  const startAutoAdvance = () => {
    stopAutoAdvance();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
  };

  const stopAutoAdvance = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  return (
    <section className="relative w-full bg-slate-300 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-64 h-64 mx-auto rounded-full"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-black">{features[activeIndex].title}</h2>
          <p className="text-gray-600 max-w-md">{features[activeIndex].description}</p>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={prevFeature}
              className="p-2 rounded-full bg-white shadow hover:bg-blue-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextFeature}
              className="p-2 rounded-full bg-white shadow hover:bg-blue-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-10 md:mt-0 space-y-6">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-3 w-full max-w-xs p-3 rounded-lg transition ${index === activeIndex
                  ? "bg-blue-100 text-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span
                className={`w-3 h-3 rounded-full border ${index === activeIndex ? "bg-blue-600 border-blue-600" : "border-gray-400"
                  }`}
              ></span>
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
