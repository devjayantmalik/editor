import React from "react";
import OutputTabs from "./OutputTabs";

const OutputSection = () => (
  <section className="h-100 p-0 content-section">
    <OutputTabs />

    <div className="overflow-scroll h-100 p-4"></div>
  </section>
);

export default OutputSection;
