import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const cardImages = [
  "https://img.freepik.com/free-vector/cute-australian-shepherd_138676-2071.jpg",
  "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg",
  "https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29372.jpg",
  "https://img.freepik.com/free-vector/climber-with-flag-conquering-top-mountain-hand_460848-15284.jpg",
];

export default function Offerings() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0c1e4a] py-24 px-4 sm:px-6 md:px-12 text-white w-full">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-5xl h-20 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-100 drop-shadow-md">
          Our Offerings
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
          Discover the AI magic powering modern business. Speed, precision, and creativity — bundled into stunning AI agents.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-16">
        {[0, 1].map((section) => (
          <div
            key={section}
            className="w-full max-w-5xl flex flex-col lg:flex-row bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-white/10 overflow-hidden transition-all hover:scale-[1.015] duration-300"
          >
            {/* Image Carousel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 backdrop-blur-2xl">
              <div className="relative w-full max-w-[280px] sm:max-w-[260px] h-[240px] sm:h-[240px] rounded-2xl overflow-hidden">
                {cardImages.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`AI Offering ${i + 1}`}
                    className="absolute w-full h-full object-cover rounded-2xl"
                    style={{ zIndex: index === i ? 10 : index + 1 === i ? 5 : 0 }}
                    initial={{ y: -10, scale: 1 }}
                    animate={{
                      y: index === i ? 0 : index + 1 === i ? 10 : 25,
                      scale: index === i ? 1 : 0.95,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl h-16 sm:h-10 md:h-16 lg:h-24 md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Enhance every role with our AI Agents
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed">
                Intelligent agents that don’t just react — they plan, solve, and scale. From customer service to backend automation, our AI adapts and thrives.
              </p>
              <p className="mt-6 text-lg font-semibold text-lime-300">⚡ 80% Faster Query Resolution</p>
              <Button className="mt-6 bg-white text-blue-700 hover:bg-zinc-100 font-semibold transition-all px-6 py-2 w-full sm:w-auto shadow-md">
                Explore More →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
