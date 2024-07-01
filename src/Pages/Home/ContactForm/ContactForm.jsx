import { useState } from "react";



const ContactForm =()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending the data to your server
    console.log({ name, email, subject, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="w-3/4 mx-auto bg-[#F2EFE5] p-10 rounded-2xl my-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-1">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
