import React from "react";

import OutputSection from "./components/OutputSection";
import EditorSection from "./components/EditorSection";

const EditorPage = () => {
  return (
    <div className="d-flex is-row h-100">
      <EditorSection />
      <OutputSection />
    </div>
  );
};

export default EditorPage;
