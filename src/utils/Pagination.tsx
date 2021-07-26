import React from 'react'
import style from './utils.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


type PropsType = {
	currentPageCount: number,
	setCurrentPageCount: any,
	pages?: number | null
}


const Pagination: React.FC<PropsType> = ({currentPageCount, setCurrentPageCount, pages}) => {

	const classes = useStyles();

	return <div className={style.paginator} >
<ButtonGroup color="primary" aria-label="contained primary button group">
  <Button disabled={currentPageCount === 1} onClick={() => setCurrentPageCount(currentPageCount - 1)} >&lt;Back</Button>
  <Button>{`${currentPageCount} of ${pages}`}</Button>
  <Button disabled={currentPageCount === pages} onClick={() => setCurrentPageCount(currentPageCount + 1)} >Forward&gt;</Button>
</ButtonGroup>
	</div>
}

export default Pagination
