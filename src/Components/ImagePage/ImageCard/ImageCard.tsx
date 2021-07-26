import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import style from './ImageCard.module.css';

const ImageCard: React.FC = () => {
	return (
		<div className={style.cardContainer}>
			<img className={style.cardImg} src="https://live.staticflickr.com/65535/51335885336_72cee74dcf.jpg" />
			<div className={style.button}>
				<Button variant="contained" color="primary">
					Bookmark it!
				</Button>
			</div>
			<div>Aluminium Powered by Brabus Badge Emblem Decal interior rear boot</div>
		</div>
	);
};

export default ImageCard;
