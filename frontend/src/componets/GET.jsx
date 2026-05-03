import React from 'react'
import CodeBlock from './CodeBlock';
import AdBanner from '../ads/AdBanner';
import { titleclass } from '../constant/theme_asseets';
import { MdAutoDelete } from "react-icons/md";
import { MdChromeReaderMode } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { VscRepoFetch } from "react-icons/vsc";

const GET = () => {
    const jsCode = `https://test-mode.com/api/products`;

    const Productresponse = `{
    "id": 1001,
    "name": "Packing Cube Set 6-Piece",
    "category": "Travel",
    "sku": "PRD-TRV-2001",
    "price": 24.99,
    "weight_kg": 0.72,
    "image_url": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400",
    "stock_quantity": 62,
    "dimensions": {
      "length": 33,
      "width": 13,
      "height": 49
    },
    "on_sale": true
  },`

    const howtofetchjs = `const res = await fetch(
  "https://test-mode.com/api/products",
);
const data = await res.json();`

    //  ##### Python Code Base ######

    const pythonapifetch = `import requests

url = "https://test-mode.com/api/products"

try:
    response = requests.get(url)
    response.raise_for_status()  # check for HTTP errors
    
    data = response.json()
    print(data)

except requests.exceptions.RequestException as e:
    print("API Error:", e)`

    return (
        <div >
            <section className=' lg:w-8/12 w-11/12  mx-auto'>
                <h1 className={`${titleclass} flex items-center gap-2`}><VscRepoFetch className='w-9 h-9'/>GET METHOD</h1>
                <div className=''>
                    <CodeBlock
                        code={jsCode}
                        language='js'
                        filename="api-endpoint"
                    />
                    <div>
                        <h2 className={`${titleclass} flex items-center gap-2`}><MdChromeReaderMode className='w-9 h-9'/>How to use</h2>
                        <CodeBlock
                            code={howtofetchjs}
                            language='js'
                            filename="React Js"
                        />
                          <AdBanner />
                        <CodeBlock
                            code={pythonapifetch}
                            language='py'
                            filename="Python"

                        />
                    </div>
                  
                    <div>
                        <h2 className={`${titleclass} flex items-center gap-2`}><RiSendPlaneFill className='w-9 h-9'/>Response</h2>
                        <CodeBlock
                            code={Productresponse}
                            language='js'
                            filename="status code: 200"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GET