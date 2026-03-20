import React from 'react'

const About = () => {
  return (
     <div className="max-w-4xl mx-auto p-6 leading-7">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4">
        Our platform is designed to help developers generate fake and dummy data for testing and development purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What We Provide</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Fake Indian Addresses</li>
        <li>GST Numbers</li>
        <li>Mobile Numbers</li>
        <li>Email IDs</li>
        <li>Random User Data</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why Use Our Tool?</h2>
      <p className="mb-4">
        Developers often need realistic-looking data to test forms, APIs, and applications. Our tool saves time by generating instant sample data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Important Note</h2>
      <p className="mb-4">
        All data generated is fake and should not be used for illegal or real-world identity purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p>
        To provide simple and efficient tools that improve developer productivity.
      </p>
    </div>
  )
}

export default About