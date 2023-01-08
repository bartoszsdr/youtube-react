import { Link } from 'react-router-dom'

import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constans'

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: '0' }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
					image={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
					<Typography variant="subtitle2" color="grey">
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5px' }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	)
}

export default VideoCard
