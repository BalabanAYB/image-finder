import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {getImages, PhotoType} from '../../state/image-reducer'
import { AppStateType } from '../../state/store'
import ImagePage from './ImagePage'
import Pagination from '../../utils/Pagination'
import style from './ImagePage.module.css'
import ImageForm from '../ImageForm/ImageForm'

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
	const [PageSizeCount, setPageSizeCount] = useState(30)

	/*useEffect(() => {
		if(getImages) {
			getImages('tesla', currentPageCount, 30)
			.then(console.log(photos))
		}

	}, [currentPageCount])*/

	const searchImage = (text: string):any => {
		if (getImages) {
			getImages(text, currentPageCount, PageSizeCount)
		}
	}

	return <div>
		<ImageForm searchImage={searchImage}/>
		<Pagination pages={pages} currentPageCount={currentPageCount} setCurrentPageCount={setCurrentPageCount} />
<ImagePage photos={photos}/>
<Pagination pages={pages} currentPageCount={currentPageCount} setCurrentPageCount={setCurrentPageCount} />
	</div>
}

const mapStateToProps = (state:AppStateType): MapStatePropsType => ({
photos: state.images.photos,
pages: state.images.pages
})

export default connect(mapStateToProps, {getImages})(ImagePageContainer)
