import AdBanner from "../../ads/AdBanner"
import { useContextImage } from "../../constant/imge_assets"
import { titleclass } from "../../constant/theme_asseets"
import { Test } from "../../Test/TestComponent"
// import { TestComponent } from "../../Test/TestComponent"
import CodeBlock from "../CodeBlock"


const NumberValidationdoc = () => {
    const Syntax = `const value = useContext(ContextName); // "light", "dark" like this define. `

    const cretaecontext = `import { createContext } from "react";
export const ErrorContext = createContext();`

    const contextProvider = `import { useState } from "react";
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
    };`

    const Wrappingtoapp = `<BrowserRouter>
    <ErrorProvider>
      <App />
    </ErrorProvider>
</BrowserRouter>`

    const usecontextapi = `import { useContext } from "react";
import { ErrorContext } from "../Test/ErrorContext";
   
export function Test() {
   const { showError } = useContext(ErrorContext);
   return (
       <button onClick={() => showError("Something went wrong!")}>
         Test Error
       </button>
     );
}`

    return (
        <div className="lg:w-8/12 w-11/12 mx-auto my-2.5">
            <div className=" space-y-2">
                <h1 className={`${titleclass}`}>How to use useContext in react js ?</h1>
                <p>useContext is a hook in React that allows components to access and share data from a Context directly without passing props through every component level.</p>

                <div className="max-h-[500px] rounded-2xl overflow-hidden">
                    <img src={useContextImage} alt="usecontext Image" className="w-full max-h-[500px]" />
                </div>

                <div>
                    <h2 className={`${titleclass}`}>Syntax</h2>
                    <CodeBlock
                        language="js"
                        code={Syntax}
                        filename="Syntax"
                    />
                    <span className={`${titleclass}`}>Short Flow</span>
                    <CodeBlock
                        language="js"
                        code={`createContext() → Provider → useContext()`}
                        filename="Short Flow"
                    />
                </div>

            </div>
            <div className="space-y-3">
                <span className={`${titleclass}`}>Mini Project - React Global Error Handler using Context API</span>
                <p>This mini project showcases how to build a global error handling system in React using createContext and useContext. The application allows any component to trigger an error popup modal that appears globally with a backdrop and dismiss button.</p>

                <div>
                     <CodeBlock 
                        language="js"
                        filename="ErrorContext.js"
                        code={cretaecontext}
                     />
                     <CodeBlock language="js" filename="ErrorProvider.jsx" code={contextProvider} />
                     <CodeBlock language="js" filename="App.jsx" code={Wrappingtoapp} />
                     <CodeBlock language="js" filename="Test.jsx" code={usecontextapi} />
                </div>
                <div className="flex flex-col gap-y-3">
                     <strong className={`${titleclass}`}>Preview</strong>
                     <AdBanner />
                     <Test />
                </div>
            </div>
        </div>
    )
}

export default NumberValidationdoc