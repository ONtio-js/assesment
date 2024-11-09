import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputElement from '../components/InputElement';

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortConfig, setSortConfig] = useState({
		key: null,
		direction: 'ascending',
	});

	// Fetch data from API
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.org/posts'
				);
				setData(response.data);
				setFilteredData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})();
	}, []);

	// Handle search/filter posts function
	useEffect(() => {
		const filtered = data.filter((item) =>
			Object.values(item).some((value) =>
				String(value).toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
		setFilteredData(filtered);
	}, [searchTerm, data]);

	// Handle Sort posts function
	const handleSort = (key) => {
		let direction = 'ascending';
		if (sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });

		const sortedData = [...filteredData].sort((a, b) => {
			if (!isNaN(a[key]) && !isNaN(b[key])) {
				return direction === 'ascending'
					? a[key] - b[key]
					: b[key] - a[key];
			} else if (isNaN(a[key]) && isNaN(b[key])) {
				const stringComparison = a[key].localeCompare(
					b[key],
					undefined,
					{
						sensitivity: 'base',
					}
				);
				return direction === 'ascending'
					? stringComparison
					: -stringComparison;
			} else {
				return isNaN(a[key]) ? -1 : 1;
			}
		});

		setFilteredData(sortedData);
	};

	return (
		<div className='relative'>
			<h1 className='font-semibold text-pink-700 my-5 capitalize'>Dashboard component</h1>
			<div className='w-full flex flex-col items-center'>
				<InputElement
					type='text'
					placeholder='Search post here...'
					value={searchTerm}
					onchange={(e) => setSearchTerm(e.target.value)}
				/>
				<div className='flex justify-evenly w-full'>
					<button
						onClick={() => handleSort('id')}
						className='bg-pink-700 px-5 py-1 rounded text-white'
					>
						sort by ID
					</button>
					<button
						onClick={() => handleSort('category')}
						className='border-pink-700 border px-5 py-1 rounded text-black'
					>
						sort by category
					</button>
					<button
						onClick={() => handleSort('title')}
						className='bg-pink-700 px-5 py-1 rounded text-white'
					>
						sort by Title
					</button>
				</div>
				<table className='mt-3 border border-pink-200 rounded-md  px-10 '>
					<thead className='bg-pink-700 h-12'>
						<tr>
							<th>ID</th>
							<th>category</th>
							<th>Title</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map((item) => (
							<tr
								key={item.id}
								className={` ${
									item.id % 2 == 0
										? 'bg-pink-100'
										: 'bg-white'
								} h-10`}
							>
								<td>{item.id}</td>
								<td>{item.category}</td>
								<td>{item.title}</td>
								<td>{item.updatedAt}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
