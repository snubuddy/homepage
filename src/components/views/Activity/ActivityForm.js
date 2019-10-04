import React, { Component } from 'react'
import { 
	FormContent, 
	FormInput, 
	FormSelect, 
	FormPhoto } from 'components/molecules/FormContent'
import DatePicker from 'components/molecules/DatePicker'

import { _activity_type, _activity_category } from 'constants/List'

import 'styles/Layout.css'

class ActivityForm extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			date: "",
			place: "",
			type: "일반",
			category: "",
			photo: "",
			preview: null
		}
	}

	onSubmitHandler = (e) => {
		e.preventDefault()
		alert(`submiting ${this.state.title}`)
	}

	onChangePhoto = (e) => {
		e.preventDefault()

		let reader = new FileReader()
		let file = e.target.files[0]
		reader.onloadend = () => {
			this.setState({
				photo: file,
				preview: reader.result
			})
		}

		reader.readAsDataURL(file)
	}

	render() {
		return (
			<div className="activity-form__wrapper layout-wrapper">
				<div className="activity-form layout-content">
					<form className="activity-form-list" onSubmit={this.onSubmitHandler}>
						<h1> 활동 등록 </h1>
						<FormInput
							label="활동명"
							value={this.state.title}
							onChange={(e) => this.setState({title: e.target.value})}
						/>
						<FormSelect
							label="활동 종류"
							array={_activity_type}
							value={this.state.type}
							onChange={(e) => this.setState({type: e.target.value})}
						/>
						<FormContent
							label="날짜"
							content={<DatePicker
								type="date"
								value={this.state.date}
								onChange={(value) => this.setState({date: value})}/>}
						/>
						<FormInput
							label="장소"
							value={this.state.place}
							onChange={(e) => this.setState({place: e.target.value})}
						/>
						<FormSelect
							label="카테고리"
							array={_activity_category} 
							value={this.state.category}
							onChange={(e) => this.setState({category: e.target.value})}
						/>
						<FormPhoto
							label="활동 사진"
							onChange={this.onChangePhoto}
							preview={this.state.preview}
						/>
						<button type="submit"> 제출 </button>
					</form>
				</div>
			</div>
		)
	}
}

export default ActivityForm
