import AppHeader from '@/components/Header/AppHeader';
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation';
import Box from '@mui/material/Box';
export default function Home() {
	return (
		<>
			<main style={{ display: 'flex' }}>
				<LeftNavigation />
				<AppHeader />
			</main>
		</>
	);
}
