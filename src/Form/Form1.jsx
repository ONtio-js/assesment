import React from 'react';
import { useFormContext } from './FormContext';
import Title from '../components/Title';
import InputElement from '../components/InputElement';

const Form1 = () => {
	const { formData, errors, updateFormData, nextStep } = useFormContext();

	return (
		<div>
			<Title title={'step 1: Registration'} />
			<InputElement
				type={'text'}
				placeholder={'Full Name'}
				value={formData.name}
				onchange={(e) => updateFormData('name', e.target.value)}
			/>

			{errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
			<InputElement
				type={'email'}
				placeholder={'Enter Email address'}
				value={formData.email}
				onchange={(e) => updateFormData('email', e.target.value)}
			/>
			{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

			<div className='flex mt-16 justify-end'>
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

export default Form1;
