import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'

import { logo } from '../utils/constans'

import { Stack } from '@mui/material'

const Navbar = () => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			p={2}
			sx={{ position: 'sticky', backgroundColor: '#0f0f0f', top: 0, justifyContent: 'space-between' }}>
			<Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
				<img src={logo} alt="Logo" height={25} style={{ marginLeft: '2px' }} />
			</Link>
			<SearchBar />
		</Stack>
	)
}

export default Navbar
