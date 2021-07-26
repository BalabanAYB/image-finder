import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import style from './ImageForm.module.css';

type ImageFormValuesType = {
	image: string;
};

type OwnPropsType = {
	searchImage: (text: string) => any;
};

const Form: React.FC<InjectedFormProps<ImageFormValuesType>> = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field name={'image'} component={'input'} />
		</form>
	);
};

const FormRedux = reduxForm<ImageFormValuesType>({ form: 'image' })(Form);

const ImageForm: React.FC<OwnPropsType> = ({ searchImage }) => {
	const onSubmit = (formData: ImageFormValuesType) => {
		searchImage(formData.image);
	};
	return (
		<div>
			<FormRedux onChange={onSubmit} />
		</div>
	);
};

export default ImageForm;
