"use client";

import { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { User, Mail, MessageSquare } from 'lucide-react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save to database)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-screen mx-auto p-6 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className=" gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
          <InlineWidget
            url="https://calendly.com/gianni-disti" // Replace with your Calendly link
            styles={{ height: '650px' }}
          />
        </div>

        <div>
        <h1 className='text-2xl font-bold'>Do you prefer reaching me by mail or any other social?</h1>
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="flex items-center font-medium mb-1">
                <User className="w-5 h-5 mr-2 text-green-500" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center font-medium mb-1">
                <Mail className="w-5 h-5 mr-2 text-green-500" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center font-medium mb-1">
                <MessageSquare className="w-5 h-5 mr-2 text-green-500" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                rows={4}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;