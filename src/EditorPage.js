import React from "react";
import SplitPane from "react-split-pane";
import OutputSection from "./components/OutputSection";
import EditorSection from "./components/EditorSection";

const resizerStyles = {
  width: 6,
  backgroundColor: "black",
  cursor: "col-resize",
};

const EditorPage = () => {
  return (
    <SplitPane
      split="vertical"
      defaultSize="100vh"
      allowResize
      resizerStyle={resizerStyles}
    >
      <EditorSection />
      <OutputSection />
    </SplitPane>
  );
};

export default EditorPage;
