import React, { Component } from 'react'
import DatePicker from 'components/molecules/DatePicker'
import LanguagePicker from 'components/molecules/LanguagePicker'

import { 
	FormInput,
	FormTextarea,
	FormContent,
	FormSelect } from 'components/molecules/FormContent'
import { 
	_countries, 
	_gender, 
	_gender_preference } from 'constants/List'

import 'styles/UserForm.css'

class UserForm extends Component{

	constructor(props) {
		super(props)
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			korean_name: "",
			gender: "",
			birth: "",
			country: "",
			major: "",
			hobby: "",
			interest: "",
			self_introduction: "",
			comment: "",
			gender_preference: "",
			max_buddy_number: 0,
			language: [],
		}
	}

	render() {
		return (
			<div className="user-form__wrapper">
				<div className="user-form">
					<form className="user-form__form">
						<h1 className="user-form__title"> Edit user information </h1>
						<FormInput 
							label="First name"
							className="user-form__formcontent"
							value={this.state.first_name}
							onChange={(e) => this.setState({first_name: e.target.value})}
						/>
						<FormInput
							label="Last name"
							className="user-form__formcontent"
							value={this.state.last_name}
							onChange={(e) => this.setState({last_name: e.target.value})}	
						/>
						<FormInput 
							label="e-mail"
							className="user-form__formcontent"
							value={this.state.email}
							onChange={(e) => this.setState({email: e.target.value})}						
						/>
						<FormInput
							label="Korean name*"
							className="user-form__formcontent"
							optional={true}
							value={this.state.korean_name}
							onChange={(e) => this.setState({korean_name: e.target.value})}
						/>
						<FormSelect
							label="Gender"
							array={_gender}
							className="user-form__formcontent"
							onChange={(e) => this.setState({gender: e.target.value})}
							value={this.state.gender}
						/>
						<FormContent
							label="Birth"
							className="user-form__formcontent"
							content={(<DatePicker 
								value={this.state.birth}
								onChange={(value) => this.setState({birth: value})}
							/>)}
						/>
						<FormSelect
							label="Country"
							array={_countries}
							className="user-form__formcontent"
							onChange={(e) => this.setState({country: e.target.value})}
							value={this.state.country}
						/>
						<h1 className="user-form__title"> Edit matching information </h1>
						<FormInput 
							label="Major"
							className="user-form__formcontent"
							onChange={(e) => this.setState({major: e.target.value})}
						/>
						<FormInput
							label="Hobby"
							className="user-form__formcontent"
							onChange={(e) => this.setState({hobby: e.target.value})}
						/>
						<FormInput 
							label="Interest"
							className="user-form__formcontent"
							onChange={(e) => this.setState({interest: e.target.value})}
						/>
						<FormTextarea
							label="Self introduction"
							className="user-form__formcontent"
							onChange={(e) => this.setState({self_introduction: e.target.value})}
						/>
						<FormTextarea 
							label="Comment*"
							className="user-form__formcontent"
							onChange={(e) => this.setState({comment: e.target.value})}
							
						/>
						<FormSelect
							label="Gender Preference"
							array={_gender_preference}
							className="user-form__formcontent"
							onChange={(e) => this.setState({gender_preference: e.target.value})}
							value={this.state.gender_preference}
						/>
						<FormInput
							label="Max buddy number"
							className="user-form__formcontent"
							type="number"
							onChange={(e) => this.setState({max_buddy_number: e.target.value})}
						/>
						<FormContent
							label="Language"
							className="user-form__formcontent"
							content={(<LanguagePicker 
								value={this.state.language}
								onChange={(value) => {this.setState({language: value})}}
								/>)}
						/>
						<button type="submit" className="user-form__button">
							Confirm
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default UserForm
