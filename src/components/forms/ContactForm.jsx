import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "info", message: "Sending..." });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ 
          name: "", 
          email: "", 
          message: "" 
        });
      })
      .catch((error) => {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
        console.error('EmailJS error:', error);
      });
  };

  return (
    <FormWrapper ref={form} onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label>What are you working on?</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us a little about your project, goal, or challenge"
          rows="5"
        />
      </FormGroup>
      {status.message && (
        <StatusMessage type={status.type}>
          {status.message}
        </StatusMessage>
      )}
      <SubmitButton type="submit">Send Message</SubmitButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  
  &:last-of-type {
    margin-bottom: 32px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`;

const inputStyles = `
  width: 100%;
  padding: 14px;
  color: #333;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;

  &:hover {
    border-color: #bdbdbd;
    background-color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #424242;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 66, 66, 0.1);
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 120px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #424242;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #212121;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StatusMessage = styled.div`
  margin: 0 0 24px;
  padding: 14px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${props => {
    switch(props.type) {
      case 'error':
        return 'background-color: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7;';
      case 'success':
        return 'background-color: #f0fff4; color: #38a169; border: 1px solid #c6f6d5;';
      default:
        return 'background-color: #f5f5f5; color: #424242; border: 1px solid #e0e0e0;';
    }
  }}
`;
