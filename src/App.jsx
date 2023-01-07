import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

import { Box } from '@mui/material'

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: '#0f0f0f' }}>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:search" element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	)
}

export default App
