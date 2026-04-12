import React from 'react'
import { titleclass } from '../constant/theme_asseets'
import CodeBlock from './CodeBlock'
import { createDB, Exmplecode, saveOfflinedata } from '../constant/ReactDoc/offlineArchitecture'
import AdBanner from '../ads/AdBanner'

const OfflineArchitectureDoc = () => {
  return (
    <div className='w-8/12 mx-auto py-5'>
        <div className=' space-y-2.5'>
             <h1 className={`${titleclass}`}>Offline-First Architecture with Background Sync</h1>
             <span>“Save data locally first, sync to server when internet is available.”</span>
             <div className='my-2 px-5'>
                 <span>Example :</span>
                <ul className='px-5 space-y-1 mt-2'>
                    <li>WhatsApp : message sends later if no internet</li>
                    <li>Google Docs : saves offline and syncs later</li>
                    <li>Delivery apps : store orders offline</li>
                </ul>
             </div>
             <main>
                  <span className={`${titleclass}`}>How to Use It (Step-by-Step)</span>
                  <CodeBlock 
                    code={createDB}
                    filename='dbPromise.js'
                    language='js'
                  />
                  <div>
                      <span className={`${titleclass}`}>Save Data Locally</span>
                      <CodeBlock code={saveOfflinedata} filename="saveOffline.js" language='js'/>
                  </div>

                  <AdBanner />

                  <div>
                       <span className={`${titleclass}`}>Submit Data in React JS (Online + Offline) 🔥 | IndexedDB with Complete Example Code</span>
                      <CodeBlock code={Exmplecode} filename="StudentForm.jsx" language='jsx'/>

                  </div>
                  <span>Outout Video Link : <a href="https://youtu.be/9kaG02UTLZo" className='text-primary-600 underline underline-offset-2'>https://youtu.be/9kaG02UTLZo</a></span>
             </main>
        </div>
    </div>
  )
}

export default OfflineArchitectureDoc