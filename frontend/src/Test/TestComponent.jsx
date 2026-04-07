import { useContext } from "react";
import { ErrorContext } from "../Test/ErrorContext";

export function Test() {

  const { showError } = useContext(ErrorContext);

  return (
    <button className="bg-primary-600 w-fit px-4 rounded-2xl py-1.5 text-sm text-primary-50 cursor-pointer" onClick={() => showError("Something went wrong!")}>
      Test Error
    </button>
  );
}