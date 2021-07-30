import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloudIcon from '@material-ui/icons/Cloud';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Badge from '@material-ui/core/Badge';
import style from './Nav.module.css';
import { AppStateType } from '../../state/store';
import { connect } from 'react-redux';
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
			overflow: 'none',
			width: '60px',
			height: '100%',
			marginTop: '64px',
			position: 'fixed'
		},
		drawerItem: {
			display: 'flex',
			justifyContent: 'center',
			padding: '8px 0'
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

type MapStatePropsType = {
	count: number | null;
};

let Nav: React.FC<MapStatePropsType> = ({ count }) => {
	const classes = useStyles();

	const [localCount, setLocalCount] = useState(localStorage.getItem('countLocalSave'));

	useEffect(() => {
		setLocalCount(localStorage.getItem('countLocalSave'));
	}, [count]);

	return (
		<div id="nav" className={`${classes.root} ${style.nav}`}>
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
								<ListItemIcon className={classes.iconItem}>
									{index % 2 === 0 ? (
										<NavLink activeClassName={style.active} to="/search">
											<CloudIcon />
										</NavLink>
									) : (
										<NavLink activeClassName={style.active} to="/save_image">
											{' '}
											<Badge badgeContent={localCount} color="secondary">
												<BookmarksIcon />
											</Badge>
										</NavLink>
									)}
								</ListItemIcon>
							</ListItem>
						))}
					</List>
					<Divider />
				</div>
			</Drawer>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	count: state.images.count
});

export default connect(mapStateToProps, {})(Nav);
