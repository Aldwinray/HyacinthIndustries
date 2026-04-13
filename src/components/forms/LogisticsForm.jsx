import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const LogisticsForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setStatus({ type: 'info', message: 'Sending...' });

      emailjs.sendForm(
        import.meta.env.VITE_ENGINEERING_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_ENGINEERING_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_ENGINEERING_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setStatus({ type: 'success', message: 'Request submitted successfully!' });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }).catch((error) => {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
        console.error('EmailJS error:', error);
      }).finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <FormWrapper ref={form} onSubmit={handleSubmit}>
      <FormTitle>Request Engineering Services</FormTitle>
      <FormDescription>
        Fill out the form below to request our engineering services.
      </FormDescription>
      
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
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>
      
      <FormGroup>
        <Label>Project Details <Optional>(optional)</Optional></Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your engineering project needs"
          rows="5"
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </FormGroup>
      
      {status.message && (
        <StatusMessage type={status.type}>
          {status.message}
        </StatusMessage>
      )}
      
      <SubmitButton 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  color: #333;
  text-align: center;
`;

const FormDescription = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
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

const Optional = styled.span`
  font-weight: 400;
  font-size: 0.85rem;
  color: #757575;
  font-style: italic;
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

const ErrorMessage = styled.span`
  color: #e53935;
  font-size: 0.85rem;
  margin-top: 6px;
  display: block;
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

  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
    transform: none;
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

export default LogisticsForm;