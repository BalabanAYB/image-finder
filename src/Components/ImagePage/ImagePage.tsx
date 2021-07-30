import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard/ImageCard';
import style from './ImagePage.module.css';
import { PropsPageType } from './ImagePageContainer';

type PropsSaveType = {
	photos: null | undefined;
	deleteButton?: any;
	remove?: boolean;
	count?: number | null | undefined;
	setRemove?: (check: true | false) => any;
	setSaveCount?: (count: number) => any;
};
const ImagePage: React.FC<PropsPageType | PropsSaveType> = ({
	photos,
	deleteButton,
	remove,
	setRemove,
	setSaveCount,
	count
}) => {
	let photoGroup: any;
const localCount = Number(localStorage.getItem('countLocalSave'))
if (localCount && setSaveCount) {
	setSaveCount(localCount);
}


	if (photos?.length) {
		photoGroup = photos.map(photo => (
			<ImageCard
				count={count}
				setSaveCount={setSaveCount}
				setRemove={setRemove}
				deleteButton={deleteButton}
				id={photo.id}
				key={photo.id}
				src={photo.src ? photo.src : ''}
				someTags={photo.tags ? photo.tags : null}
				title={photo.title ? photo.title : ''}
			/>
		));
	}

	return <div className={style.page}>{photoGroup}</div>;
};

export default ImagePage;
