import { Box, CircularProgress, Stack } from '@mui/material'

const Loader = () => (
	<Box minHeight="85vh">
		<Stack direction="row" justifyContent="center" alignItems="center" height="80vh">
			<CircularProgress color="error" />
		</Stack>
	</Box>
)

export default Loader
