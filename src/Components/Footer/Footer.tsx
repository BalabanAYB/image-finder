import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Footer.module.css'

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
	  fontSize: '14px'
    },
  }),
);

const Footer: React.FC = () => {

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

	return <div id='footer' className={`${classes.root} ${style.footer}`}>
	<AppBar position="static">
	  <Toolbar>
		<Typography variant="h6" className={classes.title}>
		  Copyrights
		</Typography>
	  </Toolbar>
	</AppBar>
  </div>
}

export default Footer
