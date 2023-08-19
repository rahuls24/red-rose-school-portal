import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppHeader() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar variant='dense'>
					<Typography variant='h6' color='inherit' component='div'>
						{'Red Rose Public School'}
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
