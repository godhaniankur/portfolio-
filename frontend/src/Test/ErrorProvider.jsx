import { useState } from "react";
import { ErrorContext } from "./ErrorContext";

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const showError = (msg) => {
    setMessage(msg);
    setError(true);
  };

  const dismissError = () => {
    setError(false);
    setMessage("");
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}

    {error && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[99]">

    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded shadow-lg w-80">

      <div className="flex justify-between items-center">
        <span>{message}</span>

        <button
          onClick={dismissError}
          className="ml-4 font-bold cursor-pointer"
        >
          Dismiss
        </button>
      </div>

    </div>

  </div>
)}

    </ErrorContext.Provider>
  );
};