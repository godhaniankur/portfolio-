import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import '../CodeBlock.css'

const LANG_MAP = {
  js:         "javascript",
  jsx:        "jsx",
  ts:         "typescript",
  tsx:        "tsx",
  py:         "python",
  css:        "css",
  html:       "markup",
  bash:       "bash",
  sh:         "bash",
};

export default function CodeBlock({ code = "", language = "jsx", filename }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const lang = LANG_MAP[language] ?? language;

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, lang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="cb-root">
      <div className="cb-header">
        <span className="cb-dot cb-dot--red" />
        <span className="cb-dot cb-dot--yellow" />
        <span className="cb-dot cb-dot--green" />
        {filename && <span className="cb-filename">{filename}</span>}
        <button className="cb-copy" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="line-numbers">
        <code ref={codeRef} className={`language-${lang}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}