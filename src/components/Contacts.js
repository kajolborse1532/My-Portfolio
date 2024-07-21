import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/img/contact.png';

const Contacts = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      
    
    const serviceId = 'service_q24so7n'; // Replace with your actual service ID
    const templateId = 'template_9ldacji'; // Replace with your actual template ID
    const publicKey = 'Dw9vclJDhsWISGNvn'; // Replace with your actual public key

    const templateParams = {
      from_firstname: firstname,
      from_lastname: lastname,
      from_email: email,
      to_name: 'web Wizard',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col className="align-item-center2" size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit} className='emailForm'>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type='text'
                          placeholder='FirstName'
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type='text'
                          placeholder='LastName'
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type='email'
                          placeholder='Enter your Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type='tel'
                          placeholder='Mobile Number'
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea

                          rows="6"
                          
                          placeholder='Message'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      
                      <Col size={12} className="px-1">
                        <button type='submit' className='your-button-class'><span>Send</span></button>
                      </Col>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
