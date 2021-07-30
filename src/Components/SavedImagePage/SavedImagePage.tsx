import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ImagePage from '../ImagePage/ImagePage';
import { setSaveCount } from '../../state/image-reducer';
import style from '../ImagePage/ImagePage.module.css';

type PropsType = {
	count: number | null;
	setSaveCount: any;
};

const SavedImagePage: React.FC<PropsType> = props => {
	const [photos, setPhotos] = useState(null);
	const [remove, setRemove] = useState(false);
	const deleteButton = true;

	useEffect(() => {
		let localSave: any = localStorage.getItem('savedPhotos');
		if (typeof localSave === 'string') {
			setPhotos(JSON.parse(localSave));
		}
	}, [remove, props.count]);

	console.log(props.count)

	return (
		<div className={style.container}>
			<ImagePage
				count={props.count}
				setSaveCount={props.setSaveCount}
				remove={remove}
				setRemove={setRemove}
				deleteButton={deleteButton}
				photos={photos}
			/>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	count: state.images.count
});

export default connect(mapStateToProps, { setSaveCount })(SavedImagePage);
