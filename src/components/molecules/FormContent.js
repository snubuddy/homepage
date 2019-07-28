import React from 'react'

import 'styles/Form.css'

/* FormContent: 형식에 맞춘 form 생성
 * props.content로 전달된 component를 형식에 맞추어 렌더링합니다. 
 * props.label에는 해당 필드의 제목이 들어갑니다.
 */
export const FormContent = (props) => {
	return (
		<div className="formcontent">
			<div className="formcontent__title-wrapper">
				<p className="formcontent__title">
					{props.label}
				</p>
			</div>
			<div className="formcontent__content-wrapper">
					{props.content}
			</div>
		</div>
	)
}

/* FormInput을 위한 helper function */
const Input = (props) => {
	return (
		<input
			type={props.type} 
			onChange={props.onChange}
			value={props.value}
			placeholder={props.placeholder}
			className="formcontent__input"
		/>
	)
}

/* FormInput: 형식에 맞춘 textarea Field 생성
 * props.label에는 해당 필드의 제목이 들어갑니다.
 * props를 통해 전달된 type, onChange, value, 
 * placeholder는 그대로 적용됩니다.
 */
export const FormInput = (props) => {

	return FormContent({label: props.label,
		content: Input(props)
	})
}

/* FormTextarea을 위한 helper function */
const Textarea = (props) => {
	return (
		<textarea
			onChange={props.onChange}
			value={props.value}
			placeholder={props.placeholder}
			className="formcontent__textarea"
		/>
	)
}

/* FormTextarea: 형식에 맞춘 textarea Field 생성
 * props.label에는 해당 필드의 제목이 들어갑니다.
 * props를 통해 전달된 onChange, value, 
 * placeholder는 그대로 적용됩니다.
 */
export const FormTextarea = (props) => {
	return FormContent({label: props.label,
		content: Textarea(props)
	})
}

const Select = (props) => {
	let array = (props.array === undefined) ? [] : props.array

	return (
		<select onChange={props.onChange} value={props.value}>
			<option value=""> ----- </option>
			{
				array.map(value => (
					<option value={value} key={value}> {value} </option>
				))
			}
		</select>
	)
}

export const FormSelect = (props) => {
	return FormContent({label: props.label,
		content: Select(props)
	})
}
