import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ContactForm({ onSuccess }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    message: "",
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

    window.gtag?.("event", "contact_form_submit", {
      form_name: "contact_form",
      page_location: window.location.href,
    });

    onSuccess?.({
      name: formData.name,
      email: formData.email,
      industry: formData.industry,
      message: formData.message,
    });

    setFormData({
      name: "",
      email: "",
      industry: "",
      message: "",
    });
  };


  return (
    <FormWrapper onSubmit={handleSubmit}>
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
        <Label>Industry</Label>
        <Select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select an Industry</option>
          <option value="Logistics">Logistics</option>
          <option value="General Services">General Services</option>
          <option value="Administrative Support">Administrative Support</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Marketing">Marketing</option>
          <option value="Web Design">Web Design</option>
          <option value="3D Animation">3D Animation</option>
          <option value="Other">Other</option>
        </Select>
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
      <SubmitButton type="submit">Send Message</SubmitButton>
    </FormWrapper>
  );
}

ContactForm.propTypes = {
  onSuccess: PropTypes.func
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

const Select = styled.select`
  ${inputStyles}
  appearance: none;
  background-color: #fafafa;
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
  background-color: var(--primary);
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
    background-color: #aa2b2b;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
