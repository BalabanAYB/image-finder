import { Photo } from '@material-ui/icons';
import { Dispatch } from 'redux';
import { imageAPI } from '../api/api';

const SET_IMAGES = 'SET_IMAGES';
const RESET = 'RESET';
const SAVE_COUNT = 'SAVE_COUNT';

type PayloadType = {
	total: number;
	page: number;
	perpage: number;
	photo: Array<PhotoType>;
	pages: number;
};

type GetImagesActionType = {
	type: typeof SET_IMAGES;
	payload: PayloadType;
};

type ResetActionType = {
	type: typeof RESET;
};

type SaveCountActionType = {
	type: typeof SAVE_COUNT;
	count: number;
};

const setImages = (payload: PayloadType): GetImagesActionType => ({ type: SET_IMAGES, payload });
export const reset = (): ResetActionType => ({ type: RESET });
export const setSaveCount = (count: number): SaveCountActionType => ({ type: SAVE_COUNT, count });

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
	tags?: string | null;
};

type ActionTypes = GetImagesActionType | SaveCountActionType;

type InitialStateType = {
	photos: Array<PhotoType> | null;
	totalCount: number | null;
	currentPageCount: number | null;
	pages: number | null;
	count: number | null;
};

const initialState: InitialStateType = {
	photos: null,
	totalCount: null,
	currentPageCount: null,
	pages: null,
	count: 0
};

const ImageReducer = (state = initialState, action: ActionTypes | ResetActionType): InitialStateType => {
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
				pages: action.payload.pages
			};
		}
		case RESET: {
			return {
				...state,
				photos: null,
				totalCount: null,
				currentPageCount: null,
				pages: null
			};
		}

		case SAVE_COUNT: {
			return {
				...state,
				count: action.count
			};
		}
		default:
			return state;
	}
};

export default ImageReducer;
