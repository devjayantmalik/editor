import React from "react";
import EditorMenu from "./EditorMenu";

const EditorSection = () => (
  <section className="column editor-section h-100 p-0">
    <EditorMenu />
    <div id="editor" className="overflow-scroll h-100 p-4"></div>
  </section>
);

export default EditorSection;
