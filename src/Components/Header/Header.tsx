import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import style from './Header.module.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {

	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setAuth(event.target.checked);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	  setAnchorEl(null);
	};

	return <div id='header' className={`${classes.root} ${style.header}`}>
	<AppBar position="static">
	  <Toolbar>
		<Typography variant="h6" className={classes.title}>
		  Image Finder
		</Typography>
		{auth && (
		  <div>
			<IconButton
			  aria-label="account of current user"
			  aria-controls="menu-appbar"
			  aria-haspopup="true"
			  onClick={handleMenu}
			  color="inherit"
			>
			  <AccountCircle />
			</IconButton>
			<Menu
			  id="menu-appbar"
			  anchorEl={anchorEl}
			  anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			  }}
			  keepMounted
			  transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			  }}
			  open={open}
			  onClose={handleClose}
			>
			  <MenuItem onClick={handleClose}>Profile</MenuItem>
			  <MenuItem onClick={handleClose}>My account</MenuItem>
			</Menu>
		  </div>
		)}
	  </Toolbar>
	</AppBar>
  </div>
}

export default Header
