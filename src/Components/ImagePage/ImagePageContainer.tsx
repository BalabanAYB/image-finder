import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getImages, PhotoType} from '../../state/image-reducer'
import { AppStateType } from '../../state/store'
import ImagePage from './ImagePage'
import style from './ImagePage.module.css'

export type PropsPageType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
	photos: Array<PhotoType> | null
}

type MapDispatchPropsType = {
	getImages?: (text: string, count: number, size: number) => any
}

const ImagePageContainer: React.FC<PropsPageType> = ({photos, getImages}) => {

	useEffect(() => {
		if(getImages) {
			getImages('cars', 1, 30)
			.then(console.log(photos))
		}

	}, [])


	return <div>
		<input/>
<ImagePage photos={photos}/>
	</div>
}

const mapStateToProps = (state:AppStateType): MapStatePropsType => ({
photos: state.images.photos
})

export default connect(mapStateToProps, {getImages})(ImagePageContainer)
