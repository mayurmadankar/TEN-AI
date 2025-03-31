import React from "react";
import { Badge } from "@/components/ui/badge";

const Reviews = () => {
  return (
    <section className="h-screen w-full bg-white dark:bg-black flex flex-col items-center justify-center py-16">
      <div className="container mx-auto px-4">
        {/* badge of reviews */}
        <div className="flex justify-center mb-4">
          <Badge className="bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-300 font-[Manrope] text-slate-700 dark:text-slate-300 text-xs rounded-4xl px-2 py-1 flex items-center gap-2">
            <img
              className="bg-yellow-200 rounded-4xl overflow-auto p-0.5 w-4 h-4"
              src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/668f703d2aa0bf69a597c3d9_Label%20Arrow.svg"
              alt=""
            />
            Reviews
          </Badge>
        </div>

        {/* Headline and details*/}
        <h1 className="text-4xl md:text-5xl font-[Manrope] font-semibold text-center mb-4 dark:text-gray-200 leading-snug">
          Learn Why <br /> Clients Love TenAI
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-sm text-center mb-12">
          Here’s what our customers had to say
        </p>

        {/* 2 card only for structure might change later with better upgrades */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-xs w-full group/card">
            <div className="bg-blue-600 dark:bg-blue-800 p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-50">
                "TenAI's solution has streamlined our processes dramatically."
              </p>
              <p className="mt-4 font-bold text-right text-gray-50">
                - Alex Johnson
              </p>
            </div>
          </div>

          <div className="max-w-xs w-full group/card">
            <div className="bg-blue-600 dark:bg-blue-800 p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-50">
                "An innovative approach that truly delivers results."
              </p>
              <p className="mt-4 font-bold text-right text-gray-50">
                - Maria Rodriguez
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
