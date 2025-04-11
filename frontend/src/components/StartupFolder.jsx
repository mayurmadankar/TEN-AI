import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        img: "/Worldclas.png",
        title: "World-Class Talent",
        desc: "We are a powerhouse of AI and full-stack engineering experts ready to move your project into production.",
    },
    {
        img: "/Cost.png",
        title: "50% Cost",
        desc: "We bring in top-tier Silicon Valley-caliber expertise at just 50% of the cost.",
    },
    {
        img: "/True.png",
        title: "True Partners",
        desc: "We collaborate with you in agile sprints—strategizing and co-developing every step of the way.",
    },
    {
        img: "/Bar.png",
        title: "Proven AI Success",
        desc: "From nimble startups to global enterprises, we've deployed and scaled Agentic AI solutions that drive real results.",
    },
];

const StartupFolder = () => {
    return (
        <section className="bg-[#f4f4f6] px-6 py-24">
            <div className="max-w-6xl mx-auto">
                {/* Top Text Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold md:w-1/2">
                        Why Founders <br className="hidden md:block" />
                        Choose us?
                    </h2>
                    <p className="text-gray-600 text-[14px] mt-[72px] md:mt-9 md:w-1/2">
                        <span className="block">
                            We get it—building impactful Agentic AI solutions on a
                        </span>
                        startup budget is tough. That's where we come in.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="transition flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="mb-4 flex justify-center items-center w-full"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full max-h-56 object-contain transition-transform"
                                />
                            </motion.div>

                            <div className=" hover:shadow-lg p-4 text-center w-full transition">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartupFolder;
