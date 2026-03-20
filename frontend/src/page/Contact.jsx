import React, { useState } from 'react';

export default function DeveloperContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    environment: 'staging',
    category: 'feature',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/API
    console.log('Developer Suggestion Registered:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds for demonstration
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5">
        
        {/* Left Side: Information & Resources */}
        <div className="bg-blue-900 text-white p-10 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Dev Support</h2>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Encountered an issue with the test data? Have a suggestion for the API? Register your feedback here to help us improve the testing environment.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase text-blue-400 font-semibold tracking-wider">Documentation</h3>
                <p className="mt-1 text-gray-100">docs.developer.local/api</p>
              </div>
              <div>
                <h3 className="text-sm uppercase text-blue-400 font-semibold tracking-wider">Direct Email</h3>
                <p className="mt-1 text-gray-100">api-support@yourdomain.com</p>
              </div>
              <div>
                <h3 className="text-sm uppercase text-blue-400 font-semibold tracking-wider">System Status</h3>
                <p className="mt-1 text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  All Systems Operational
                </p>
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Developer Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Jane Doe"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="dev@example.com"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Environment Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Testing Environment</label>
                  <select
                    name="environment"
                    value={formData.environment}
                    onChange={handleChange}
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
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe your suggestion, the expected behavior, or the missing test data..."
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
              >
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}