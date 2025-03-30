import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const cardImages = [
  "https://img.freepik.com/free-vector/cute-australian-shepherd_138676-2071.jpg?t=st=1743355435~exp=1743359035~hmac=0db1afbde1361af427b946321ad749393508328c70c2046abaf538add9a8d8e3&w=826",
  "https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?t=st=1743355469~exp=1743359069~hmac=231ac1bc1d4edd75a90c6f875916c670c0434b5333dddfd1d85673156226253b&w=826",
  "https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29372.jpg?t=st=1743355485~exp=1743359085~hmac=bfc4bf448dff7029bb703fa0aa714a86bcd60a62672e078375b1691b9f7f1bdc&w=1380",
  "https://img.freepik.com/free-vector/climber-with-flag-conquering-top-mountain-hand_460848-15284.jpg?t=st=1743355500~exp=1743359100~hmac=8ce6c15a3dfc6ebeed3869c25c4fe328f3acda41729479a348f62f4e91e74380&w=900",
];

export default function Offerings() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="bg-blue-600 mt-6 py-16 w-full flex items-center flex-col gap-6 text-white">
        <h1 className="text-center mb-4 -mt-4 font-semibold text-5xl">Our Offerings</h1>
            <div className="bg-zinc-100 h-[44vh] xl:h-[55vh] rounded-2xl px-4 py-6">
        <div className="w-5xl mt-10 mx-auto flex flex-col justify-evenly md:flex-row items-center gap-4">
          <div className="relative w-[350px] h-[280px] flex items-center justify-center">
            {cardImages.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`AI Offering ${i + 1}`}
                className="absolute w-full h-full rounded-2xl shadow-lg"
                style={{ zIndex: index === i ? 10 : 5 - i }}
                initial={{ y: -20, scale: 1 }}
                animate={{ y: index === i ? 0 : 20 * (i - index), scale: index === i ? 1 : 0.95 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>
  
          <div className="text-left max-w-md">
            <h2 className="text-3xl text-zinc-900 font-bold">Enhance every role with our AI Agents</h2>
            <p className="mt-4 text-zinc-900">
              General-purpose problem solvers that can plan and execute commonly repeated tasks, whether it's sales, customer service, or back-office operations.
            </p>
            <hr className="w-full mt-4"/>
            <p className="mt-4 text-lg text-zinc-900 font-semibold">80% Faster Query Resolution</p>
            <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">Explore More →</Button>
          </div>
        </div>
            </div>
      
            <div className="bg-zinc-100 h-[44vh] xl:h-[55vh] rounded-2xl px-4 py-6">
        <div className="w-5xl mt-10 mx-auto flex justify-evenly md:flex-row items-center gap-4">

            
          <div className="text-left max-w-md">
            <h2 className="text-3xl text-zinc-900 font-bold">Enhance every role with our AI Agents</h2>
            <p className="mt-4 text-zinc-900">
              General-purpose problem solvers that can plan and execute commonly repeated tasks, whether it's sales, customer service, or back-office operations.
            </p>
            <hr className="w-full mt-4"/>
            <p className="mt-4 text-lg text-zinc-900 font-semibold">80% Faster Query Resolution</p>
            <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">Explore More →</Button>
          </div>

          <div className="relative w-[350px] h-[280px] flex items-center justify-center">
            {cardImages.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`AI Offering ${i + 1}`}
                className="absolute w-full h-full rounded-2xl shadow-lg"
                style={{ zIndex: index === i ? 10 : 5 - i }}
                initial={{ y: -20, scale: 1 }}
                animate={{ y: index === i ? 0 : 20 * (i - index), scale: index === i ? 1 : 0.95 }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>
  
        </div>
            </div>
      
      </section>
    );
  }
