import React, { Component } from 'react'
import {
	_languages,
	_language_option } from 'constants/List'

const LanguageSelector = (props) => {
	return (
		<div>
			<select onChange={props.languageOnChange} value={props.languageValue}>
				<option value=""> ----- </option>
				{
					_languages.map(value => (
						<option key={value} value={value}> {value} </option>
					))
				}
			</select>
			<select onChange={props.optionOnChange} value={props.optionValue}>
				<option value=""> ----- </option>
				{
					_language_option.map(value => (
						<option key={value} value={value}> {value} </option>
					))
				}
			</select>
		</div>
	)
}

export default class LanguagePicker extends Component {

	constructor(props) {
		super(props)
		let _languages = (props.value.length === 0) 
			? [{name: "", option: ""}] : props.value

		this.state = {
			languages: _languages 
		}
	}

	onClickButton = (e) => {
		e.preventDefault()
		this.setState(prevState => {
			return {languages: [...prevState.languages, {name: "", option: ""}]}
		})	
	}

	onChangeLanguage = (index) => (e) => {
		let _name = e.target.value
		this.setState(prevState => {
			return {languages: prevState.languages.map((item, id) =>
				(id === index) ? ({...item, name: _name}) : item
			)}
		}, () => this.props.onChange(this.state.languages)
		)
	}

	onChangeOption = (index) => (e) => {
		let _option = e.target.value
		this.setState(prevState => {
			return {languages: prevState.languages.map((item, id) =>
				(id === index) ? ({...item, option: _option}) : item
			)}
		},
			() => this.props.onChange(this.state.languages)
		)
	}

	render() {
		return(
			<div>
				{
					this.state.languages.map((item, index) => (
						<LanguageSelector 
							key={index} 
							languageValue={this.state.languages[index].name}
							optionValue={this.state.languages[index].option}
							languageOnChange={this.onChangeLanguage(index)}
							optionOnChange={this.onChangeOption(index)}
						/>
					))
				}
				<button onClick={this.onClickButton}> Add line </button>
			</div>
		)
	}
}
