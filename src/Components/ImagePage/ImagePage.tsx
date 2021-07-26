import React from 'react'
import ImageCard from './ImageCard/ImageCard'
import style from './ImagePage.module.css'
import { PropsPageType } from './ImagePageContainer'


const ImagePage: React.FC<PropsPageType> = ({photos}) => {

	let photoGroup: any

	if (photos?.length) {
		photoGroup = photos.map(photo => <ImageCard key={photo.id} src={'' && photo.src} title={photo.title} />)
	}

	return <div className={style.page}>
		{photoGroup}
	</div>
}

export default ImagePage
