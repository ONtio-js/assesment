import React from 'react'

const InputElement = ({type,placeholder,value,onchange}) => {
  return (
		<div className='border border-pink-200 py-2 px-5 rounded-full my-3'>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onchange}
                className='w-full bg-transparent outline-none'
			/>
		</div>
  );
}

export default InputElement