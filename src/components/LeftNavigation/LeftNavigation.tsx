'use client';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import {
	Menu,
	MenuItem,
	MenuItemStyles,
	Sidebar,
	SubMenu,
	menuClasses,
	sidebarClasses,
} from 'react-pro-sidebar';
import InfoIcon from '@mui/icons-material/Info';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import Event from '@mui/icons-material/Event';
import Sports from '@mui/icons-material/Sports';
import Person from '@mui/icons-material/Person';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import School from '@mui/icons-material/School';

type Theme = 'light' | 'dark';

const themes = {
	light: {
		sidebar: {
			backgroundColor: '#ffffff',
			color: 'rgba(0, 0, 0, 0.87)',
		},
		menu: {
			menuContent: '#ffffff',
			icon: 'rgba(0, 0, 0, 0.87)',
			hover: {
				backgroundColor: 'rgba(0, 0, 0, 0.04)',
				color: '#44596e',
			},
			disabled: {
				color: 'rgba(0, 0, 0, 0.26)',
			},
		},
	},
	dark: {
		sidebar: {
			backgroundColor: '#121212',
			color: '#fff',
		},
		menu: {
			menuContent: '#121212',
			icon: '#fff',
			iconHover: 'rgba(0, 0, 0, 0.6)',
			hover: {
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				color: 'rgba(0, 0, 0, 0.6)',
			},
			disabled: {
				color: '#3e5e7e',
			},
		},
	},
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const LeftNavigation = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [theme, setTheme] = useState<Theme>('light');
	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
	const menuItemStyles: MenuItemStyles = {
		root: {
			fontSize: '13px',
			fontWeight: 400,
		},
		icon: {
			color: themes[theme].menu.icon,
			[`&.${menuClasses.disabled}`]: {
				color: themes[theme].menu.disabled.color,
			},
			[`&:hover`]: {
				color: '#121212',
			},
		},
		SubMenuExpandIcon: {
			color: '#b6b7b9',
		},
		subMenuContent: ({ level }) => ({
			backgroundColor:
				level === 0
					? hexToRgba(
							themes[theme].menu.menuContent,
							!isCollapsed ? 0.4 : 1,
					  )
					: 'transparent',
		}),
		button: {
			[`&.${menuClasses.disabled}`]: {
				color: themes[theme].menu.disabled.color,
			},
			'&:hover': {
				backgroundColor: hexToRgba(
					themes[theme].menu.hover.backgroundColor,
					1,
				),
				color: themes[theme].menu.hover.color,
			},
		},
		label: ({ open }) => ({
			fontWeight: open ? 600 : undefined,
		}),
	};
	return (
		<Sidebar
			collapsed={isCollapsed}
			rootStyles={{
				[`.${sidebarClasses.container}`]: {
					height: '100vh',
				},
				color: themes[theme].sidebar.color,
			}}
			backgroundColor={hexToRgba(
				themes[theme].sidebar.backgroundColor,
				1,
			)}
		>
			<Tooltip
				title={isCollapsed ? 'Expand' : 'Collapse'}
				placement='right'
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'end',
						alignItems: 'center',
					}}
				>
					<IconButton onClick={toggleSidebar}>
						{isCollapsed ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
					</IconButton>
				</Box>
			</Tooltip>

			<Menu menuItemStyles={menuItemStyles}>
				<SubMenu label='About Us' icon={<InfoIcon />}>
					<MenuItem>Home</MenuItem>
					<MenuItem>About Us</MenuItem>
					<MenuItem>Mission & Vision</MenuItem>
					<MenuItem>History</MenuItem>
					<MenuItem>Values</MenuItem>
					<MenuItem>Contact Us</MenuItem>
				</SubMenu>
				<SubMenu label='Academics' icon={<School />}>
					<MenuItem>Academics Home</MenuItem>
					<MenuItem>Courses Offered</MenuItem>
					<MenuItem>Curriculum</MenuItem>
					<MenuItem>Academic Calendar</MenuItem>
				</SubMenu>
				<SubMenu label='Admissions' icon={<Event />}>
					<MenuItem>Admissions Home</MenuItem>
					<MenuItem>Admission Process</MenuItem>
					<MenuItem>Requirements</MenuItem>
					<MenuItem>Application Forms</MenuItem>
					<MenuItem>Important Dates</MenuItem>
				</SubMenu>
				<SubMenu label='Activities' icon={<CelebrationRoundedIcon />}>
					<MenuItem>Extracurricular Activities</MenuItem>
					<MenuItem>Clubs & Organizations</MenuItem>
					<MenuItem>Sports & Athletics</MenuItem>
					<MenuItem>Events & Workshops</MenuItem>
				</SubMenu>
				<SubMenu label='News & Resources' icon={<NewspaperIcon />}>
					<MenuItem>News & Announcements</MenuItem>
					<MenuItem>Parent Resources</MenuItem>
					<MenuItem>Student Resources</MenuItem>
					<MenuItem>FAQs</MenuItem>
				</SubMenu>
				<SubMenu label='Connect' icon={<Person />}>
					<MenuItem>Faculty & Staff</MenuItem>
					<MenuItem>Alumni</MenuItem>
					<MenuItem>Gallery</MenuItem>
					<MenuItem>Advisory Services</MenuItem>
					<MenuItem>Social Media Links</MenuItem>
				</SubMenu>
			</Menu>
		</Sidebar>
	);
};

export default LeftNavigation;
