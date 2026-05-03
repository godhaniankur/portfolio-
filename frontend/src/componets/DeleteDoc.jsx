import React from 'react'
import CodeBlock from './CodeBlock';
import AdBanner from '../ads/AdBanner';
import { titleclass } from '../constant/theme_asseets';
import { MdAutoDelete } from "react-icons/md";
import { MdChromeReaderMode } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";


const DeleteDoc = () => {
    const jsCode = `https://test-mode.com/api/products/1001`;

    const Productresponse = `
    {
        isSuccess:true,
        message:"Delete Product SuccessFully."
    }`

    const howtofetchjs = `try {
      const response = await fetch("https://test-mode.com/api/products/products/1001", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        alert("Product deleted successfully");
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Delete Error:", error);
      setStatus('error');
    }`



    return (
        <div >
            <section className=' lg:w-8/12 w-11/12  mx-auto'>
                <h1 className={`${titleclass} flex items-center gap-2`}><MdAutoDelete className='w-9 h-9'/>Delete Method</h1>
                <div className=''>
                    <CodeBlock
                        code={jsCode}
                        language='js'
                        filename="api-endpoint"
                    />
                    <div>
                        <h2 className={`${titleclass} flex items-center gap-2`}><MdChromeReaderMode className='w-9 h-9'/> How to use</h2>
                        <CodeBlock
                            code={howtofetchjs}
                            language='js'
                            filename="React Js"
                        />
                          <AdBanner />
                    </div>
                  
                    <div>
                        <h2 className={`${titleclass} flex items-center gap-2`}><RiSendPlaneFill  className='w-9 h-9'/> Response</h2>
                        <CodeBlock
                            code={Productresponse}
                            language='js'
                            filename="status code: 204"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DeleteDoc