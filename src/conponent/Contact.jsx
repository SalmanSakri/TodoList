import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {

     const [formData, setFormData] = useState({
       name: "",
       email: "",
       message: "",
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert("Message submitted successfully!");
     };

  return (
    <div className="container">
      <Navbar />
      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            <strong>📧 Email</strong>
            <br />
            workforeign@gmail.com
          </p>
          <p>
            <strong>📞 Phone No.</strong>
            <br />
            +44 (0) XXXX XXX XXX
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Weak"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your query..."
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
