import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from './ImageCard.module.css';

type PropsType = {
	title: string,
	src: string
}

const ImageCard: React.FC<PropsType> = ({title, src}) => {
	return (
		<div className={style.cardContainer}>
			<img className={style.cardImg} src={src} />
			<div className={style.button}>
				<Button variant="contained" color="primary">
					Bookmark it!
				</Button>
			</div>
			<div>{title}</div>
		</div>
	);
};

export default ImageCard;
