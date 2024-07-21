import { useState, useEffect } from "react";
import { Col, Row, Alert, Form, Button } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({
        EMAIL: email
      });
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs={12} md={8}>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col xs={12} md={4}>
          <Button type="submit">Subscribe</Button>
        </Col>
      </Row>
      {status === 'sending' && <Alert variant="info">Sending...</Alert>}
      {status === 'error' && <Alert variant="danger">{message}</Alert>}
      {status === 'success' && <Alert variant="success">{message}</Alert>}
    </Form>
  );
};
