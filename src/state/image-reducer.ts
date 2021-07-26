import { Photo } from '@material-ui/icons';
import { Dispatch } from 'redux';
import { imageAPI } from '../api/api';

const SET_IMAGES = 'SET_IMAGES';

type PayloadType = {
	total: number;
	page: number;
	perpage: number;
	photo: Array<PhotoType>;
};

type GetImagesActionType = {
	type: typeof SET_IMAGES;
	payload: PayloadType;
};

const setImages = (payload: PayloadType): GetImagesActionType => ({ type: SET_IMAGES, payload });

export const getImages = (text: string, page: number, size: number) => async (dispatch: Dispatch<ActionTypes>) => {
	const response = await imageAPI.searchImage(text, page, size);
	if (response.stat === 'ok') {
		dispatch(setImages(response.photos));
	}
	console.log(response.photos);
};

export type PhotoType = {
	id: string;
	owner: string;
	farm: number;
	title: string;
	ispublic: number;
	isfriend: number;
	isfamily: number;
	src?: string | undefined;
	server?: string;
	secret?: string;
};

type ActionTypes = GetImagesActionType;

type InitialStateType = {
	photos: Array<PhotoType> | null;
	totalCount: number | null;
	currentPageCount: number | null;
	pageSize: number | null;
	pages: number | null;
};

const initialState: InitialStateType = {
	photos: null,
	totalCount: null,
	currentPageCount: null,
	pageSize: null,
	pages: null
};

const ImageReducer = (state = initialState, action: ActionTypes): InitialStateType => {
	switch (action.type) {
		case SET_IMAGES: {
			return {
				...state,
				photos: [
					...action.payload.photo.map((item: any) => ({
						id: item.id,
						owner: item.owner,
						farm: item.farm,
						title: item.title,
						ispublic: item.ispublic,
						isfriend: item.isfriend,
						isfamily: item.isfamily,
						src: `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
					}))
				],
				totalCount: action.payload.total,
				currentPageCount: action.payload.page,
				pageSize: action.payload.perpage
			};
		}
		default:
			return state;
	}
};

export default ImageReducer;
