import React, { Component } from 'react'

const FormContent = (props) => {
	let optional = (props.optional === undefined) ? false : props.optional
	let classes = ['formcontent__input']
	let type = (optional) ? 'formcontent__input-optional' : 'formcontent__input-needed'
	classes.push(type)

	return (
		<div>
			<p>
				{props.label}
			</p>
			<input
				type={props.type} 
				onChange={props.onChange}
				value={props.value}
				placeholder={props.placeholder}
				className={classes.join(" ")}
			/>
		</div>
	)
}

const FormSpecial = (props) => {
	let optional = (props.optional === undefined) ? false : props.optional

	return (
		<div>
			<p>
				{props.label}
			</p>
			{props.content}
		</div>
	)
}


class UserForm extends Component{
	render() {
		return (
			<div>
				<form>
					<FormContent 
						label="First name"
					/>
					<FormContent
						label="Last name"
					/>
					<FormContent 
						label="e-mail"
					/>
					<FormContent
						label="Korean name"
						optional={true}
					/>
					<FormContent 
						label="Gender"
					/>
					<FormContent
						label="Birth"
					/>
					<FormContent
						label="Country"
					/>
					<hr />
					<FormContent 
						label="Major"
					/>
					<FormContent
						label="Hobby"
					/>
					<FormContent 
						label="Interest"
					/>
					<FormSpecial
						label="Self introduction"
						content={(<textarea />)}
					/>
					<FormSpecial 
						label="Comment"
						content={(<textarea />)}
						optional={true}
					/>
					<FormContent
						label="Gender Preference"
					/>
					<FormContent
						label="Max buddy number"
					/>
					<FormContent
						label="Language"
					/>
				</form>
			</div>
		)
	}
}

export default UserForm
