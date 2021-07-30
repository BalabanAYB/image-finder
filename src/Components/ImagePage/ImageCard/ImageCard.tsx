import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import style from './ImageCard.module.css';
import SomeTags from '../../SomeTag/SomeTags';

type PropsType = {
	title: string;
	someTags?: string | null;
	src: string;
	id: string;
	count?: number | null | undefined;
	deleteButton?: any;
	setRemove?: (check: true | false) => any;
	setSaveCount?: (count: number) => any;
};

type SaveCardNewType = {
	tags: string;
	src: string;
	id: string;
};

const ImageCard: React.FC<PropsType> = ({
	title,
	src,
	deleteButton,
	id,
	setRemove,
	someTags,
	setSaveCount,
	count
}) => {
	const [save, setSave] = useState(false);
	const [isRemove, setIsRemove] = useState(false);
	const [cardId, setCardId] = useState(id);
	const [editMode, setEditMode] = useState(false);
	const [tags, setTags] = useState(title);
	const [localCount, setLocalCount] = useState(localStorage.getItem('countLocalSave'));

	useEffect(() => {
		let localSave: any = localStorage.getItem('savedPhotos');
		if (typeof localSave === 'string') {
			localSave = JSON.parse(localSave);
		}
		if (save) {
			const newSaveCard: SaveCardNewType = { tags, src, id };
			if (localSave) {
				localStorage.setItem('savedPhotos', JSON.stringify([...localSave, newSaveCard]));
			} else {
				localStorage.setItem('savedPhotos', JSON.stringify([{ tags, src, id }]));
			}
			setSave(false);
		} else if (isRemove) {
			if (setRemove) {
				setRemove(false);
				setIsRemove(false);
				const deleteId = id;
				localStorage.setItem(
					'savedPhotos',
					JSON.stringify([...localSave.filter((item: any) => item.id !== deleteId)])
				);
			}
		} else if (editMode) {
		}
	}, [save, isRemove, cardId, setTags, tags, count]);

	const saved = () => {
		if (deleteButton && setRemove) {
			setRemove(true);
			setIsRemove(true);
			if (count !== undefined && count !== null && setSaveCount) {
				const countSave: number = count - 1
				setSaveCount(countSave);
				localStorage.setItem('countLocalSave', JSON.stringify(countSave))
			}
		} else {
			setSave(true);
			if (setSaveCount && count !== undefined && count !== null) {
				const countSave = count + 1
				setSaveCount(countSave);
				localStorage.setItem('countLocalSave', JSON.stringify(countSave))
			}
		}
	};

	return (
		<div className={style.cardContainer}>
			<img className={style.cardImg} src={src} />
			<div className={style.button}>
				<Button onClick={saved} variant="contained" color="primary">
					{deleteButton ? 'Remove it!' : 'Bookmark it!'}
				</Button>
			</div>
			<div className={style.title}>
				<SomeTags someTags={someTags} tags={tags} setTags={setTags} />
			</div>
		</div>
	);
};

export default ImageCard;
