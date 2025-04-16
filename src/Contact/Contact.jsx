// ContactUs.jsx
import React, { useState } from 'react';
import styles from './Contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact">

    <section  className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h2><span > Get </span>In Touch</h2>
          <p>Get in touch with our team for any inquiries.</p>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={styles.infoContent}>
                <h3>Our Location</h3>
                <p>Newroad Pokhara, Nepal</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className={styles.infoContent}>
                <h3>Call Us</h3>
                <p>9808337780</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={styles.infoContent}>
                <h3>Email Us</h3>
                <p>madhyam.np@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                  ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
                  </div>
  );
};

export default Contact;