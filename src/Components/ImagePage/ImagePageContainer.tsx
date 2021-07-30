import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getImages, PhotoType, reset, setSaveCount } from '../../state/image-reducer';
import { AppStateType } from '../../state/store';
import ImagePage from './ImagePage';
import Pagination from '../../utils/Pagination';
import style from './ImagePage.module.css';
import ImageForm from '../ImageForm/ImageForm';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export type PropsPageType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

type MapStatePropsType = {
	photos: Array<PhotoType> | null;
	pages?: number | null;
	remove?: boolean;
	count?: number | null;
	setRemove?: () => any;
};

type MapDispatchPropsType = {
	getImages?: (text: string, count: number, size: number) => any;
	reset?: () => any;
	setSaveCount?: (count: number) => any;
};

type OwnPropsType = {
	deleteButton?: any;
};

const ImagePageContainer: React.FC<PropsPageType> = ({ photos, getImages, pages, reset, setSaveCount, count }) => {
	const [currentPageCount, setCurrentPageCount] = useState(1);
	const [PageSizeCount, setPageSizeCount] = useState(30);
	const [searchText, setSearchText] = useState('');
	const [load, setLoad] = useState(false);

	useEffect(() => {
		if (getImages) {
			if (searchText !== '') {
				const delayDebounceFn = setTimeout(() => {
					setLoad(true)
					getImages(searchText, currentPageCount, PageSizeCount).then(() => setLoad(false))
				}, 500);
				return () => {
					clearTimeout(delayDebounceFn);
				};
			} else {
				if (reset) {
					reset();
				}
			}
		}
	}, [currentPageCount, searchText]);

	const classes = useStyles();

	return (
		<div className={style.container}>
			<Backdrop className={classes.backdrop} open={load}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<ImageForm setCurrentPageCount={setCurrentPageCount} setSearchText={setSearchText} />
			{searchText === '' || photos === null || pages === 0 ? (
				<div>No images here. Would you try search for anything else?</div>
			) : (
				<>
					{' '}
					<Pagination
						pages={pages}
						currentPageCount={currentPageCount}
						setCurrentPageCount={setCurrentPageCount}
					/>
					<ImagePage count={count} setSaveCount={setSaveCount} photos={photos} />
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	photos: state.images.photos,
	pages: state.images.pages,
	count: state.images.count
});

export default connect(mapStateToProps, { getImages, reset, setSaveCount })(ImagePageContainer);
