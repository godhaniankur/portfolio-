import CodeBlock from './CodeBlock';
import AdBanner from '../ads/AdBanner';

const PostDoc = () => {
    const jsCode = `https://test-mode.com/api/products`;

    const Productresponse = `{
    "id": 1775377768790,
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
}`

    const howtofetchjs = `import React, { useState } from 'react';
    
    const ProductForm = () => {
      // Initialize state with your data structure
      const [formData, setFormData] = useState({
        name: "Packing Cube Set 6-Piece",
        category: "Travel",
        sku: "PRD-TRV-2001",
        price: 24.99,
        weight_kg: 0.72,
        image_url: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400",
        stock_quantity: 62,
        dimensions: {
          length: 33,
          width: 13,
          height: 49
        },
        on_sale: true
      });
    
      const [status, setStatus] = useState('');
    
      // Handle nested updates for dimensions
      const handleDimensionChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          dimensions: {
            ...prev.dimensions,
            [name]: parseFloat(value)
          }
        }));
      };
    
      // Handle top-level inputs
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : (type === 'number' ? parseFloat(value) : value)
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
    
        try {
          const response = await fetch('https://test-mode.com/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            setStatus('Product added successfully!');
          } else {
            setStatus('Failed to add product.');
          }
        } catch (error) {
          console.error('Error:', error);
          setStatus('Error connecting to server.');
        }
      };
    
      return (
        <div className='w-8/12 mx-auto'>
          {/* --- FORM SECTION --- */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <h2>Add Product</h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
            <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" />
            
            <label>Dimensions:</label>
            <input name="length" type="number" value={formData.dimensions.length} onChange={handleDimensionChange} placeholder="L" />
            <input name="width" type="number" value={formData.dimensions.width} onChange={handleDimensionChange} placeholder="W" />
            
            <label>
              On Sale: 
              <input name="on_sale" type="checkbox" checked={formData.on_sale} onChange={handleChange} />
            </label>
    
            <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white' }}>Submit POST Request</button>
            <p>{status}</p>
          </form>
    
          {/* --- PREVIEW SECTION --- */}
          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: 1 }}>
            <h2>Live Preview</h2>
            <img src={formData.image_url} alt="preview" style={{ width: '100px', borderRadius: '4px' }} />
            <p><strong>Name:</strong> {formData.name} </p>
            <p><strong>SKU:</strong> {formData.sku}</p>
            <p><strong>Price:</strong> {formData.price}</p>
            <p><strong>Size:</strong> {formData.dimensions.length} x {formData.dimensions.width} cm</p>
            <div style={{ background: '#f4f4f4', padding: '10px' }}>
              <small>Raw JSON Payload:</small>
              <pre style={{ fontSize: '12px' }}>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductForm;`

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
                <h1 className='mt-2 font-medium'>POST METHOD</h1>
                <div className=''>
                    <CodeBlock
                        code={jsCode}
                        language='js'
                        filename="api-endpoint"
                    />
                     <AdBanner />
                    <div>
                        <h2 className='text-lg font-medium'>How to use</h2>
                        <p className='px-1.5'>You can copy the code below and paste it directly into your code editor.
Update it according to your project requirements.</p>
                        <CodeBlock
                            code={howtofetchjs}
                            language='js'
                            filename="ProductForm.jsx"
                        />
                      
                    </div>
                   
                    <div>
                        <h2 className='text-lg font-medium'>Response</h2>
                        <CodeBlock
                            code={Productresponse}
                            language='js'
                            filename="status code: 201 Created , Response Time : 984 ms"
                        />
                    </div>
                </div>
            </section>
          
        </div>
    )
}

export default PostDoc