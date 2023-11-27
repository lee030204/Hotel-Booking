// About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="welcome-text">Welcome to Book My Stay!</p>
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          At Book My Stay, our passion lies in simplifying the process of finding and booking your perfect accommodations. 
          Founded in [year], we set out with a mission to revolutionize the way people discover and experience stays 
          around the world.
        </p>
        {/* Add more content for the Our Story section */}
        {/* ... */}
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <p>
          Book My Stay offers an extensive range of services to make your travel experience seamless:
        </p>
        <ul>
          <li>Effortless Accommodation Search</li>
          <li>Secure and Instant Booking</li>
          <li>Exclusive Deals and Discounts</li>
          <li>24/7 Customer Support</li>
          {/* Add more services as needed */}
        </ul>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          Behind the scenes, our dedicated team works tirelessly to ensure a seamless experience for our users. 
          Meet the passionate individuals who drive Book My Stay forward:
        </p>
        {/* Include images or brief bios of team members */}
        {/* ... */}
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to our support team at 
          <a href="mailto:support@bookmystay.com"> support@bookmystay.com</a> or connect with us on social media.
        </p>
        {/* Add social media icons or links */}
        {/* ... */}
      </section>
    </div>
  );
};

export default About;
