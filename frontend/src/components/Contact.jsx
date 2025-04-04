"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export function Contact() {
  return (
    <div className="h-[70vh] relative w-full overflow-hidden bg-blue-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,transparent)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-5xl font-bold text-white relative z-20")}>
        Start Your Journey with TenAI Today
      </h1>
      <Button className="z-50 cursor-pointer p-5 mt-6 text-sm text-black hover:text-white bg-white hover:bg-black rounded-full transition-all duration-300 ease-in-out">
        Contact us <MoveRight />
      </Button>
    </div>
  );
}
