import React from 'react';
import { FormProvider, useFormContext } from './FormContext';
import Step1 from './Form1';
import Step2 from './Form2';
import Step3 from './Form3';

const MultiStepForm = () => {
	const { currentStep } = useFormContext();

	return (
		<div className=' w-full flex justify-center items-center relative'>
          
			<div className='bg-gray-100 mt-20 h-[400px] w-[400px] p-10 rounded-md'>
				{currentStep === 1 && <Step1 />}
				{currentStep === 2 && <Step2 />}
				{currentStep === 3 && <Step3 />}
			</div>
		</div>
	);
};

const MultiStepFormWrapper = ({ toggle }) => (
	<FormProvider>
		<MultiStepForm />
	</FormProvider>
);

export default MultiStepFormWrapper;
