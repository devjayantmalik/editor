import React from "react";
import EditorMenu from "./EditorMenu";
import Codemirror from "react-codemirror";

// Required for code mirror styling
import "codemirror/lib/codemirror.css";

// Required for syntax hightlighting
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";

// Codemirror values: Will update them later
let markdownCode = `# Heading 1
This is the information about the site. We are here alwasys to help you out. Thanks for the sample markdown file.

## Heading 2

\`\`\`java
public class Human{
	public static void main(String[] args){
		System.out.println(\"Hello, World\");
	}
}
\`\`\``;

let code = `console.log("Hello, World!");

// This is really great language.`;

const EditorSection = () => (
  <section className="editor-section h-100 p-0">
    <EditorMenu />
    <div
      id="editor"
      style={{ fontSize: "22pt" }}
      className="overflow-scroll h-100"
    >
      <Codemirror
        value={markdownCode}
        onChange={(value) => {
          code = value;
        }}
        options={{
          lineNumbers: true,
          mode: "markdown",
          lineWrapping: true,
          smartIndent: true,
          autofocus: true,
          indentUnit: 4, // number of spaces per tab
          indentWithTabs: true,
          readOnly: false,
          lint: true,
        }}
      />
    </div>
  </section>
);

export default EditorSection;
