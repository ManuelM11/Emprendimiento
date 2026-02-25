import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6 md:py-10 px-4 xl:px-0">
        <span
          className={cn([
            integralCF.className,
            "text-white text-xl md:text-2xl lg:text-3xl tracking-wide",
          ])}
        >
          HOUSE OWNERS
        </span>
        <span className="hidden md:block w-px h-8 bg-white/30" />
        <p className="text-white/70 text-sm md:text-base text-center md:text-left max-w-lg">
          Ropa de gimnasio de alto rendimiento. Diseñada para entrenar duro
          y verse bien haciendolo.
        </p>
      </div>
    </div>
  );
};

export default Brands;
