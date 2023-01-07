import React from 'react'

import { Stack } from '@mui/material'
import { categories } from '../utils/constans'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Stack
			direction="row"
			sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95' }, flexDirection: { md: 'column' } }}>
			{categories.map(category => (
				<button
					className="category-btn"
					onClick={() => setSelectedCategory(category.name)}
					style={{ backgroundColor: category.name === selectedCategory && '#272727', color: '#fff' }}
					key={category.name}>
					<span style={{ color: '#f1f1f1', marginRight: '15px' }}>{category.icon}</span>
					<span>{category.name}</span>
				</button>
			))}
		</Stack>
	)
}

export default Sidebar
