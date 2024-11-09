import React from 'react';
import { useFormContext } from './FormContext';
import Title from '../components/Title';
import InputElement from '../components/InputElement';

const Form2 = () => {
	const { formData, errors, updateFormData, nextStep, prevStep } =
		useFormContext();

	return (
		<div>
			<Title title={'Step 2: Account Security'} />
			<InputElement
				type='password'
				placeholder='Password'
				value={formData.password}
				onchange={(e) => updateFormData('password', e.target.value)}
			/>
			<InputElement
				type='password'
				placeholder='confirm Password'
				value={formData.cpassword}
				onchange={(e) => updateFormData('cpassword', e.target.value)}
			/>
			{errors.password && (
				<p style={{ color: 'red' }}>{errors.password}</p>
			)}
			<div className='flex justify-between items-center mt-10'>
				<button
					className='border border-pink-700 text-black px-8 py-1 rounded-full'
					onClick={prevStep}
				>
					Back
				</button>
				<button
					className='bg-pink-700 text-white px-8 py-1 rounded-full'
					onClick={nextStep}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Form2;
