import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		if (searchTerm) {
			navigate(`/search/${searchTerm}`)
			setSearchTerm('')
		}
	}

	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: '1px solid #e3e3e3',
				pl: 2,
				boxShadow: 'none',
				ml: { xs: 2, sm: 5 },
				backgroundColor: '#121212',
			}}>
			<input
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={e => {
					setSearchTerm(e.target.value)
				}}
			/>
			<IconButton type="submit" sx={{ p: '10px', color: '#f1f1f1' }}>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar
