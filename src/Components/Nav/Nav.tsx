import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloudIcon from '@material-ui/icons/Cloud';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import style from './Nav.module.css'
const drawerWidth = 60;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			height: '100%'
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0
		},
		drawerPaper: {
			width: drawerWidth,
			position: 'relative'
		},
		drawerContainer: {
			overflow: 'none'
		},
		drawerItem: {
			display: 'flex',
			justifyContent: 'center',
			padding: '8px 0',
		},

		iconItem: {
			minWidth: 'auto'
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3)
		}
	})
);

const Nav: React.FC = () => {
	const classes = useStyles();

	return (
		<div id='nav' className={`${classes.root} ${style.nav}`}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerContainer}>
					<List>
						{['', ''].map((text, index) => (
							<ListItem className={classes.drawerItem} button key={text}>
								<ListItemIcon className={classes.iconItem} >{index % 2 === 0 ? <CloudIcon /> : <BookmarksIcon />}</ListItemIcon>
							</ListItem>
						))}
					</List>
					<Divider />
				</div>
			</Drawer>

		</div>
	);
};

export default Nav;
