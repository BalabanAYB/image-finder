import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getImages, PhotoType} from '../../state/image-reducer'
import { AppStateType } from '../../state/store'
import ImagePage from './ImagePage'
import Pagination from '../../utils/Pagination'
import style from './ImagePage.module.css'

export type PropsPageType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
	photos: Array<PhotoType> | null
	pages?: number | null
}

type MapDispatchPropsType = {
	getImages?: (text: string, count: number, size: number) => any
}

const ImagePageContainer: React.FC<PropsPageType> = ({photos, getImages, pages}) => {

	const [currentPageCount, setCurrentPageCount] = useState(1)

	useEffect(() => {
		if(getImages) {
			getImages('tesla', currentPageCount, 30)
			.then(console.log(photos))
		}

	}, [currentPageCount])




	return <div>
		<input/>
		<Pagination pages={pages} currentPageCount={currentPageCount} setCurrentPageCount={setCurrentPageCount} />
<ImagePage photos={photos}/>
	</div>
}

const mapStateToProps = (state:AppStateType): MapStatePropsType => ({
photos: state.images.photos,
pages: state.images.pages
})

export default connect(mapStateToProps, {getImages})(ImagePageContainer)
