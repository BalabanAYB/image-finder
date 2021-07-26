import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Form: React.FC = ({}) => {
return <form >
<Field name={'image'} component={'input'} />
</form>
}

const FormRedux = reduxForm({form: 'image'})(Form)


const ImageForm: React.FC = (props) => {

	const onSubmit = () => {
console.log(FormData)
	}
	return <div>
		<FormRedux onSubmit={onSubmit} />
	</div>
}


export default ImageForm

