import React from 'react';
import { useFormContext } from './FormContext';
import Title from '../components/Title';
import InputElement from '../components/InputElement';

const Form3 = () => {
	const { validateStep,formData, errors, updateFormData, prevStep } = useFormContext();

	const handleSubmit = () => {
		if (validateStep()) {
			// Submit data
			alert('Form submitted successfully!');
		}
	};

	return (
		<div>
			<Title title={'Step 3: Address'} />
			<InputElement
				type='text'
				placeholder='Home Address'
				value={formData.address}
				onchange={(e) => updateFormData('address', e.target.value)}
			/>
			{errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

			<InputElement
				type='text'
				placeholder='City'
				value={formData.city}
				onchange={(e) => updateFormData('city', e.target.value)}
			/>
			{errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}

			<InputElement
				type='text'
				placeholder='Country'
				value={formData.country}
				onchange={(e) => updateFormData('country', e.target.value)}
			/>
			{errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
			<div className='flex justify-between items-center my-8'>
				<button
					className='border-pink-700 border text-black px-8 py-1 rounded-full'
					onClick={prevStep}
				>
					Back
				</button>
				<button
					className='bg-pink-700 text-white px-8 py-1 rounded-full'
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Form3;
