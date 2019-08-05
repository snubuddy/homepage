import React, { Component } from 'react'
import {
	_languages,
	_language_level } from 'constants/List'

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
			<select onChange={props.levelOnChange} value={props.levelValue}>
				<option value=""> ----- </option>
				{
					_language_level.map(value => (
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
			? [{name: "", level: ""}] : props.value

		this.state = {
			languages: _languages 
		}
	}

	onClickButton = (e) => {
		e.preventDefault()
		this.setState(prevState => {
			return {languages: [...prevState.languages, {name: "", level: ""}]}
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

	onChangeLevel = (index) => (e) => {
		let _level = e.target.value
		this.setState(prevState => {
			return {languages: prevState.languages.map((item, id) =>
				(id === index) ? ({...item, level: _level}) : item
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
							levelValue={this.state.languages[index].level}
							languageOnChange={this.onChangeLanguage(index)}
							levelOnChange={this.onChangeLevel(index)}
						/>
					))
				}
				<button onClick={this.onClickButton}> Add line </button>
			</div>
		)
	}
}
