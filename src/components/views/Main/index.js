import React, { Component } from 'react'
import Calendar from './Calendar'

class Main extends Component {
	render() {
		return (
			<div className="main-view">
				<div className="main-view-left">
					<h1 className="main-view__title">
						Upcomming Event
					</h1>
					<img src="https://www.snubuddy.com/media/16294777.png" alt="대문 이미지"/>
				</div>
				<div className="main-view-right">
					<h1 className="main-view__title">
						Monthly Events
					</h1>
					<Calendar />
				</div>
			</div>
		)
	}
}

export default Main
