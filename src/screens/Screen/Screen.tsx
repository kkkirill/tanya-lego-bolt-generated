import React from "react";
import { motion } from "framer-motion";
import { FilterSection } from "./sections/FilterSection";
import { ProductListSection } from "./sections/ProductListSection";
import { SidebarSection } from "./sections/SidebarSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <FilterSection />

      <div className="flex flex-1 flex-col lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full lg:w-[280px]"
        >
          <SidebarSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 p-4 md:p-8"
        >
          <ProductListSection />
        </motion.div>
      </div>
    </div>
  );
};
