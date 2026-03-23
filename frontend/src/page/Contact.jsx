import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function DeveloperContact() {
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm({
    defaultValues: {
      environment: 'staging',
      category: 'feature'
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // react-hook-form passes the validated data directly to this function
  const onSubmit = (data) => {
    // Here you would send the data to your backend
    console.log('Developer Suggestion Registered:', data);
    
    setIsSubmitted(true);
    reset(); // Built-in function to clear the form fields
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
        
        {/* Left Side: Information & Resources */}
        <div className="bg-green-900 text-white p-10 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dev Support</h2>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Encountered an issue with the test data? Have a suggestion for the API? Register your feedback here to help us improve the testing environment.
            </p>
            
            <div className="space-y-6">
              {/* <div>
                <h3 className="text-sm uppercase text-green-400 font-semibold tracking-wider">Documentation</h3>
                <p className="mt-1 text-gray-100">docs.developer.local/api</p>
              </div> */}
              <div>
                <h3 className="text-sm uppercase text-green-400 font-semibold tracking-wider">Direct Email</h3>
                <p className="mt-1 text-gray-100">support.testmode@gmail.com</p>
              </div>
         
            </div>
          </div>
        </div>

        {/* Right Side: Developer Suggestion Form */}
        <div className="p-10 md:col-span-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Register Developer Suggestion</h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
              <p>Thank you for your suggestion. Our engineering team will review your feedback shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Developer Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="e.g. Jane Doe"
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-shadow ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="dev@example.com"
                    className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-shadow ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Environment Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Testing Environment</label>
                  <select
                    {...register("environment")}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="local">Local Development</option>
                    <option value="staging">Staging / QA</option>
                    <option value="sandbox">API Sandbox</option>
                    <option value="production">Production</option>
                  </select>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suggestion Category</label>
                  <select
                    {...register("category")}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="feature">Feature Request</option>
                    <option value="data_mock">Missing Mock Data</option>
                    <option value="bug">API Bug / Error</option>
                    <option value="docs">Documentation Update</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Suggestion / Details</label>
                <textarea
                  {...register("message", { 
                    required: "Please provide details for your suggestion",
                    minLength: { value: 10, message: "Message must be at least 10 characters long" }
                  })}
                  rows="4"
                  placeholder="Describe your suggestion, the expected behavior, or the missing test data..."
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 transition-shadow resize-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"   
                disabled={isSubmitting}
                className="w-full bg-green-600 text-gray-200 font-semibold py-3 rounded-lg hover:bg-green-700 focus:ring-4  transition-all duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}