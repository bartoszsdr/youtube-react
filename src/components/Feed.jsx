import { useState, useEffect } from 'react'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'

import { Box, Stack, Typography } from '@mui/material'

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('Home')
	const [videos, setVideos] = useState([])

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
	}, [selectedCategory])

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<Typography className="copyright" variant="caption" sx={{ mt: 'auto', color: '#fff' }}>
					Developed by
					<a
						href="https://codecave.pl/"
						aria-label="GitHub Link"
						rel="noopener noreferrer"
						target="_blank"
						style={{ color: '#008afb', marginLeft: 5 }}>
						Codecave
					</a>
				</Typography>
			</Box>
			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
					{selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	)
}

export default Feed
