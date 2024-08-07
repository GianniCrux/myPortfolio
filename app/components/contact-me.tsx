"use client";

import { useState } from 'react';
import { User, Mail, MessageSquare, MailIcon, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Calendly } from '../_components/calendly';

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

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="w-full mx-auto p-6 bg-white dark:bg-black text-black dark:text-white shadow-lg">
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className=" gap-8">

        <div className='pt-3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-6 w-11/12'>
        <h1 data-aos="fade-down-right" className='text-2xl font-bold md:w-1/2'>Do you want to reach me by mail or check my socials?</h1>
        <div className='w-full md:w-1/2 flex flex-wrap gap-4 justify-end'>
          <Link data-aos="fade-up" href='https://mail.google.com/mail/?view=cm&fs=1&to=gianni.disti@gmail.com' target='_blank' 
                className='flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors'>
            <MailIcon size={20} />
            <span>Email</span>
          </Link>
          <Link data-aos="fade-down" href="https://www.linkedin.com/in/giovanni-di-stefano-0b00bb202/" target='_blank' rel="noopener noreferrer"
                className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors'>
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </Link>
        <Link data-aos="fade-left" href="https://github.com/GianniCrux" target='_blank' className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors'>
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          <span>GitHub</span>
        </Link>
        </div>
        </div>

          <h3 data-aos="fade-down-right" className="text-xl font-semibold mb-4">Send a Message</h3>
          <form data-aos="fade-down-right" onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;