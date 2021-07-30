import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import style from './ImageForm.module.css';

type ImageFormValuesType = {
	image: string;
};

type OwnPropsType = {
	setSearchText: (text: string) => any;
	setCurrentPageCount: (text: number) => any;
};

const Form: React.FC<InjectedFormProps<ImageFormValuesType>> = ({ handleSubmit }) => {
	return (
		<form className={style.formSearch} onSubmit={handleSubmit}>
			<Field name={'image'} component={'input'} />
		</form>
	);
};

const FormRedux = reduxForm<ImageFormValuesType>({ form: 'image' })(Form);

const ImageForm: React.FC<OwnPropsType> = ({ setSearchText, setCurrentPageCount }) => {
	const onSubmit = (formData: ImageFormValuesType) => {
		setCurrentPageCount(1)
		setSearchText(formData.image);
	};
	return (
		<div>
			<FormRedux onChange={onSubmit} />
		</div>
	);
};

export default ImageForm;
