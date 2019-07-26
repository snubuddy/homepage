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
		selected: moment().subtract(19, 'years').month(0).date(1),
		year: moment().year() - 19,
		month: 1,
		date: 1,
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

	onChangeYear = (e) => {
		this.setState({year: e.target.value})
		this.props.stateUpdate(
			moment([
				e.target.value,
				this.state.month - 1,
				this.state.date
			])
		)
	}

	onChangeMonth = (e) => {
		this.setState({month: e.target.value})
		this.props.stateUpdate(
			moment([
				this.state.year,
				e.target.value - 1,
				this.state.date
			])
		)
	}	
	
	onChangeDate = (e) => {
		this.setState({date: e.target.value})
		this.props.stateUpdate(
			moment([
				this.state.year,
				this.state.month - 1,
				e.target.value
			])
		)
	}	
	
	onChangeWrapper = (e, func) => {
		func(e)
		this.props.stateUpdate(
			moment([
				this.state.year,
				this.state.month,
				this.state.date
			])
		)
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
	stateUpdate: (e) => {}
}

export default DatePicker
