import React from 'react'
import ImageCard from './ImageCard/ImageCard'
import style from './ImagePage.module.css'
import { PropsPageType } from './ImagePageContainer'

const ImagePage: React.FC<PropsPageType> = ({photos}) => {
	return <div className={style.page}>
<ImageCard/>
<ImageCard/>
<ImageCard/>
<ImageCard/>
<ImageCard/>
<ImageCard/>
	</div>
}

export default ImagePage
