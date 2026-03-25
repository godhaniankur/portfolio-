import React, { useState } from 'react';

const CodePreview = ({ snippets }) => {
  // Extract available languages from the snippets object
  const languages = Object.keys(snippets);
  
  // State for the currently selected language and the copy button status
  const [activeLang, setActiveLang] = useState(languages[0] || '');
  const [isCopied, setIsCopied] = useState(false);

  // Handle copying the current code to the clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippets[activeLang]);
      setIsCopied(true);
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!languages.length) return <p className="text-green-500">No code provided.</p>;

  return (
    <div className="md:w-full w-sm max-w-3xl max-h-[500px] min-h-[500px]  mx-auto overflow-y-scroll rounded-lg  border-2 border-green-600 bg-black shadow-[0_0_15px_rgba(0,255,0,0.2)] font-mono">
      
      {/* Top Bar: Dropdown and Copy Button */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 border-b-2 border-green-600">
        
        {/* Language Dropdown */}
        <select
          value={activeLang}
          onChange={(e) => setActiveLang(e.target.value)}
          className="bg-black text-green-400 border border-green-600 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer uppercase text-sm font-bold tracking-wider"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`px-4 py-1 rounded text-sm font-bold transition-all duration-300 ${
            isCopied 
              ? 'bg-green-500 text-black' 
              : 'bg-transparent text-green-500 border border-green-500 hover:bg-green-900 hover:text-green-300'
          }`}
        >
          {isCopied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm leading-relaxed whitespace-pre">
          <code>{snippets[activeLang]}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodePreview;