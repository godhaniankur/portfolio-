import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// 1. Import Prism core
import Prism from "prismjs";

// 2. Import a theme (choose one)
import "prismjs/themes/prism-tomorrow.css";   // dark
// import "prismjs/themes/prism.css";         // light
// import "prismjs/themes/prism-okaidia.css"; // okaidia dark

// 3. Import the line-numbers plugin
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// 4. Import every language you need
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import { ErrorProvider } from './Test/ErrorProvider.jsx'


// 5. Make Prism available globally (optional but handy)
window.Prism = Prism;

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ErrorProvider>

      <App />
    </ErrorProvider>


  </BrowserRouter>

)
