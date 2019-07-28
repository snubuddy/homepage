import React, { Component } from 'react'
import moment from 'moment'

const IntegerSelector = (props) => {
	return(
		<select
			value={props.value}
			onChange={props.onChange}
		>
			{
				props.array.map((item, index) => (
					<option 
						value={item}
						key={`${item}_${props.name}`}
					>
						{`${item}`}
					</option>
				))
			}
		</select>
	)
}

class DatePicker extends Component {
	state={
		year: moment().year() - 19,
		month: 1,
		date: 1,
	}

	constructor(props) {
		super(props)
		let _initial = (props.value === "" || props.value === undefined) 
			? {year: moment().year() - 19, month: 1, date: 1}
			: {
					year: props.value.substring(0, 4),
					month: props.value.substring(5, 7),
					date: props.value.substring(8, 10)
				}
		this.state = _initial
	}

	range = (offset, range) => {
		return [...Array(range).keys()].map((key) =>
			key + offset)
	}

	generateYear = () => {
		let baseYear = moment().year() - 35
		return this.range(baseYear, 20).reverse()
	}

	generateMonth = () => {
		return this.range(1, 12) 
	}

	generateDate = () => {
		let maxDate = moment([this.state.year, this.state.month-1, 1]).endOf('month').date()
		return this.range(1, maxDate) 
	}

	formatDate = () => {
		return moment([this.state.year, this.state.month-1, this.state.date])
			.format('YYYY-MM-DD')
	}

	onChangeYear = (e) => {
		this.setState({year: e.target.value}, 
			() => this.props.onChange(this.formatDate()))
	}

	onChangeMonth = (e) => {
		this.setState({month: e.target.value},
			() => this.props.onChange(this.formatDate()))
	}	
	
	onChangeDate = (e) => {
		console.log(e.target.value)
		this.setState({date: e.target.value},
			() => {this.props.onChange(this.formatDate()); console.log(this.state)})	
	}		

	render() {
		return (
			<div>
				<IntegerSelector
					value={this.state.year}
					onChange={this.onChangeYear}
					array={this.generateYear()}
					name="year"
				/>
				<IntegerSelector
					value={this.state.month}
					onChange={this.onChangeMonth}
					array={this.generateMonth()}
					name="month"
				/>
				<IntegerSelector
					value={this.state.date}
					onChange={this.onChangeDate}
					array={this.generateDate()}
					name="date"
				/>
			</div>
		)
	}
}

DatePicker.defaultProps = {
	onChange: (e) => {console.log(e)}
}

export default DatePicker
