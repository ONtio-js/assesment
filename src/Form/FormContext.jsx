// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		address: '',
		city: '',
		country: '',
	});
	const [errors, setErrors] = useState({});
	const [currentStep, setCurrentStep] = useState(1);

	const validateStep = () => {
		const newErrors = {};

		if (currentStep === 1) {
			if (!formData.name) newErrors.name = 'Name is required';
			if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
				newErrors.email = 'Valid email is required';
		} else if (currentStep === 2) {
			if (!formData.password || formData.password.length < 6)
				newErrors.password = 'Password must be at least 6 characters';
		} else if (currentStep === 3) {
			if (!formData.address) newErrors.address = 'Address is required';
			if (!formData.city) newErrors.city = 'City is required';
			if (!formData.country) newErrors.country = 'Country is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const nextStep = () => {
		if (validateStep()) setCurrentStep((prev) => prev + 1);
	};

	const prevStep = () => setCurrentStep((prev) => prev - 1);

	const updateFormData = (field, value) => {
		setFormData({ ...formData, [field]: value });
		setErrors({ ...errors, [field]: '' });
	};

	return (
		<FormContext.Provider
			value={{
				formData,
				errors,
				currentStep,
				nextStep,
				prevStep,
				updateFormData,
                validateStep
			}}
		>
			{children}
		</FormContext.Provider>
	);
};
