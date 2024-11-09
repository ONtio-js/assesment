import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import MultiStepFormWrapper from './Form/MultiStepForm'

function App() {
  const [count, setCount] = useState(0)
  const [toggle,setToggle] = useState(true)
  console.log(toggle)
  return (
		<div>
			<button
				className='absolute top-5 right-5 bg-pink-700 text-white px-5 py-1 rounded-md'
				onClick={() => setToggle(prev => !prev)}
			>
				{toggle ?'Assesment 2':'Assement 1'}
			</button>
			{toggle ? (
				<Dashboard  />
			) : (
				<MultiStepFormWrapper />
			)}
		</div>
  );
}

export default App
