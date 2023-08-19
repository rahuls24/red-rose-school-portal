import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#f9f9f9b3',
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {},
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

export { lightTheme, darkTheme };
