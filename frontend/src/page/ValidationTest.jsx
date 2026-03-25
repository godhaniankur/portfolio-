import React from 'react'
import CodePreview from '../componets/Validation/CodePreview';

const ValidationTest = () => {

    const myCodeSnippets = [
        {
            title:"Email Validation",
            laguagecode: {

                React: `import { useState, useCallback } from 'react';
    
    export const useEmailValidation = () => {
      const [email, setEmail] = useState('');
      const [error, setError] = useState('');
    
      // Standard email regex pattern
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
      const validate = useCallback((value) => {
        if (!value) {
          setError('Email is required');
          return false;
        } else if (!emailRegex.test(value)) {
          setError('Please enter a valid email address');
          return false;
        }
        setError('');
        return true;
      }, []);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Optional: Real-time validation
        validate(value);
      };
    
      return { email, error, handleChange, validate, setEmail };
                };`,

                python: `import re
    
    def is_valid_email(email):
        # This regex follows common email standards
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        
        if re.match(pattern, email):
            return True
        return False
    
    # Usage
    test_email = "testmode@gmail.com"
    if is_valid_email(test_email):
        print(f"{test_email} is valid!")
    else:
        print(f"{test_email} is invalid.")`,

                Flutter: `class FormValidator {
      static String? validateEmail(String? value) {
        if (value == null || value.isEmpty) {
          return 'Email is required';
        }
    
        // Standard RFC 5322 Email Regex
        final emailRegExp = RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_'{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
    
        if (!emailRegExp.hasMatch(value)) {
          return 'Please enter a valid email address';
        }
    
        return null; // Return null if the input is valid
      }
            }`
            }
        },
          {
            title:"Moblie Validation",
            laguagecode: {

                React: `import { useState, useCallback } from 'react';
    
    export const useEmailValidation = () => {
      const [email, setEmail] = useState('');
      const [error, setError] = useState('');
    
      // Standard email regex pattern
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
      const validate = useCallback((value) => {
        if (!value) {
          setError('Email is required');
          return false;
        } else if (!emailRegex.test(value)) {
          setError('Please enter a valid email address');
          return false;
        }
        setError('');
        return true;
      }, []);
    
      const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Optional: Real-time validation
        validate(value);
      };
    
      return { email, error, handleChange, validate, setEmail };
                };`,

                python: `import re
    
    def is_valid_email(email):
        # This regex follows common email standards
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        
        if re.match(pattern, email):
            return True
        return False
    
    # Usage
    test_email = "testmode@gmail.com"
    if is_valid_email(test_email):
        print(f"{test_email} is valid!")
    else:
        print(f"{test_email} is invalid.")`,

                Flutter: `class FormValidator {
      static String? validateEmail(String? value) {
        if (value == null || value.isEmpty) {
          return 'Email is required';
        }
    
        // Standard RFC 5322 Email Regex
        final emailRegExp = RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_'{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
    
        if (!emailRegExp.hasMatch(value)) {
          return 'Please enter a valid email address';
        }
    
        return null; // Return null if the input is valid
      }
            }`
            }
        }


    ];

    return (
        <div className='text-black mt-16'>
            <div className=' grid sm:grid-cols-1  overflow-hidden px-3'>
                <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                    {
                        myCodeSnippets.map((data,index) => (
                            <div className='' key={index}>
                                <h1 className='p-2 font-medium'>{data.title}</h1>
                                <CodePreview snippets={data.laguagecode} />
                            </div>
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}

export default ValidationTest