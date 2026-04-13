import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Check, AlertCircle, Send } from 'lucide-react';

const EngineeringForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState({});

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
    
    if (formData.phone && !/^[\d\+\-\(\)\s]*$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFocus = (e) => {
    const { name } = e.target;
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Validate on blur
    if (name === 'email' && value.trim() && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({
        ...prev,
        [name]: 'Email is invalid'
      }));
    } else if (name === 'phone' && value.trim() && !/^[\d\+\-\(\)\s]*$/.test(value)) {
      setErrors(prev => ({
        ...prev,
        [name]: 'Phone number is invalid'
      }));
    }
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
          phone: '',
          projectType: '',
          message: ''
        });
        setFocused({});
      }).catch((error) => {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
        console.error('EmailJS error:', error);
      }).finally(() => {
        setIsSubmitting(false);
      });
    }
  };
  
  // Clear success message after 5 seconds
  useEffect(() => {
    let timer;
    if (status.type === 'success') {
      timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <FormWrapper ref={form} onSubmit={handleSubmit}>
      <FormHeader>
        <FormTitle>Request Engineering Services</FormTitle>
        <FormDescription>
          Fill out the form below to request our engineering services.
        </FormDescription>
      </FormHeader>
      
      <FormRow>
        <FormGroup className={`${focused.name ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
          <Label htmlFor="name">Full Name <Required>*</Required></Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Enter your full name"
          />
          {errors.name && <ErrorMessage><AlertCircle size={14} /> {errors.name}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup className={`${focused.email ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
          <Label htmlFor="email">Email Address <Required>*</Required></Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            placeholder="Enter your email address"
          />
          {errors.email && <ErrorMessage><AlertCircle size={14} /> {errors.email}</ErrorMessage>}
        </FormGroup>
      </FormRow>
      
      <FormRow>
        <FormGroup className={`${focused.phone ? 'focused' : ''} ${errors.phone ? 'error' : ''}`}>
          <Label htmlFor="phone">Phone Number <Optional>(optional)</Optional></Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Enter your phone number"
          />
          {errors.phone && <ErrorMessage><AlertCircle size={14} /> {errors.phone}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup className={`${focused.projectType ? 'focused' : ''}`}>
          <Label htmlFor="projectType">Project Type <Optional>(optional)</Optional></Label>
          <Select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select project type</option>
            <option value="structural">Structural Engineering</option>
            <option value="civil">Civil Engineering</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>
      </FormRow>
      
      <FormGroup className={`${focused.message ? 'focused' : ''} ${errors.message ? 'error' : ''}`}>
        <Label htmlFor="message">Project Details <Optional>(optional)</Optional></Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Describe your engineering project needs, timeline, and any specific requirements"
          rows="5"
        />
        {errors.message && <ErrorMessage><AlertCircle size={14} /> {errors.message}</ErrorMessage>}
      </FormGroup>
      
      {status.message && (
        <StatusMessage type={status.type}>
          {status.type === 'success' ? <Check size={18} /> : status.type === 'error' ? <AlertCircle size={18} /> : null}
          {status.message}
        </StatusMessage>
      )}
      
      <SubmitButton 
        type="submit" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : <><Send size={18} /> Submit Request</>}
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  color: #333;
  font-family: var(--font-heading);
`;

const FormDescription = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
  line-height: 1.5;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
  position: relative;
  
  &.focused label {
    color: #DC143C;
  }
  
  &.error label {
    color: #e53935;
  }
  
  &.error input,
  &.error textarea,
  &.error select {
    border-color: #e53935;
    background-color: #fff5f5;
  }
  
  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: var(--font-body);
  transition: color 0.2s ease;
`;

const Optional = styled.span`
  font-weight: 400;
  font-size: 0.85rem;
  color: #757575;
  font-style: italic;
  margin-left: 0.25rem;
`;

const Required = styled.span`
  color: #DC143C;
  font-weight: 400;
`;

const inputStyles = `
  width: 100%;
  padding: 14px 16px;
  color: #333;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;
  font-family: var(--font-body);

  &:hover {
    border-color: #bdbdbd;
    background-color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #DC143C;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(220, 20, 60, 0.1);
  }
  
  &::placeholder {
    color: #9e9e9e;
    opacity: 0.7;
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
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-body);
  
  svg {
    flex-shrink: 0;
  }
`;

const Select = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 40px;
  
  option {
    color: #333;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #DC143C;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);

  &:hover {
    background-color: #B01030;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(220, 20, 60, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    flex-shrink: 0;
  }
`;

const StatusMessage = styled.div`
  margin: 0 0 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);

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
  
  svg {
    flex-shrink: 0;
  }
`;

export default EngineeringForm;