import React, { Component } from 'react'
import moment from 'moment'

import 'styles/Calendar.css'

var dayNames = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

class Calendar extends Component {

	constructor(props) {
		super(props)
		this.state = {
			year: moment().year(),
			month: moment().month(),
			today: moment().date(),
		}
		this.generateDate()
	}

	generateDate = () => {
		let thisMonth = (moment().year() === this.state.year) && 
			(moment().month() === this.state.month)

		let firstDay = moment([this.state.year, this.state.month, 1])
		let lastDate = moment([this.state.year, this.state.month, 1])
			.add(1, 'months').subtract(1, 'days').date()
		let offset = firstDay.day()
		let offsetDate = moment([this.state.year, this.state.month, 1])
			.subtract(offset, 'days').date()

		let dates = []
		let ret = []
		for(let i = 0; i < offset; i++) {
			dates.push({type: 'other', date: offsetDate + i})
		}

		for(let i = 1; i <= lastDate; i++) {
			dates.push({type: 'curr', date: i})
		}
		
		let padding = (7 - dates.length % 7) % 7
		for(let i = 1; i <= padding; i++) {
			dates.push({type: 'other', date: i})
		}

		if(thisMonth) {
			dates[offset+moment().date() - 1].type = 'today'
		}
		for(let i = 0; i < dates.length; i = i + 7) {
			ret.push(dates.slice(i, i+7))
		}
		return ret;
	}

	prevMonth = (e) => {
		e.preventDefault()
		if(this.state.month === 0)
			this.setState(prevState => {
				return {
					year: prevState.year - 1,
					month: 11
				}
			})
		else
			this.setState(prevState => {
				return {
					month: prevState.month - 1
				}
			})
	}

	nextMonth = (e) => {
		e.preventDefault()
		if(this.state.month === 11)
			this.setState(prevState => {
				return {
					year: prevState.year + 1,
					month: 1
				}
			})
		else
			this.setState(prevState => {
				return {
					month: prevState.month + 1
				}
			})
	}

	render() {
		return (
			<div className="calendar">
				<div className="calendar-header">
					<button className="calendar-header__button" onClick={this.prevMonth}> {'<'} </button>
					<h1 className="calendar-header__yearmonth">
						{`${this.state.year}.${this.state.month + 1}`}
					</h1>
					<button className="calendar-header__button" onClick={this.nextMonth}> {'>'} </button>
				</div>
				<table className="calendar-body">
					<thead className="calendar-body-title">
						<tr className="calendar-body-title-row">
							{
								dayNames.map( name => (
									<th className="calendar-body-title-row__content" 
										key={`${name}`}
									> 
										{name} 
									</th>
								))
							}
						</tr>
					</thead>
					<tbody className="calendar-body-dates">
						{
							this.generateDate().map((chunk, id) => (
								<tr key={id} className="calendar-body-dates-row">
									{
										chunk.map(date => (
											<td className={[
												`calendar-body-dates-row__content-${date.type}`, 
												'calendar-body-dates-row__content'].join(" ")}
												key={`${date.type}_${date.date}`}
											>
												{date.date}
											</td>
										))
									}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Calendar
