import React, { Component } from 'react'
import moment from 'moment'

import 'styles/UserDetail.css'

const Card = (props) => {
	let _content = (typeof(props.content) === 'string') 
		? (<p className="user-detail-card__detail"> {props.content} </p>)
		: props.content

	return (
		<li className="user-detail-card">
			<div className="user-detail-card__label">
				<p className="user-detail-card__title"> {props.label} </p>
			</div>
			<div className="user-detail-card__content">
				{_content}
			</div>
		</li>
	)
}

class UserDetail extends Component{

	_parse_list = () => {
		let _list = this.props.user.language.map(item => {
			return `${item.name}, ${item.level}`
		})
		return _list.map((item, index) => (
			<p key={index} className="user-detail-card__detail"> {item} </p>
		))
	}


	render() {
		return (
			<div className="user-detail">
				<ul className="user-detail-list">
					<Card
						label="Name"
						content={`${this.props.user.first_name} ${this.props.user.last_name}`}/>
					<Card
						label="e-mail"
						content={this.props.user.email} />
					<Card
						label="Gender"
						content={this.props.user.gender}/>
					<Card
						label="Age"
						content={moment().diff(this.props.birth, 'year')} />
					<Card
						label="Country"
						content={this.props.user.country} />
					<Card
						label="Major"
						content={this.props.user.major}/>
					<Card
						label="Hobby"
						content={this.props.user.hobby} />
					<Card
						label="Interest"
						content={this.props.user.interest} />
					<Card
						label="Self introduction"
						content={this.props.user.self_introduction}/>
					<Card
						label="Comment"
						content={this.props.user.comment} />
					{
						(this.props.foriegner) ? null : (
							<Card
								label="Max buddy number"
								content={this.props.user.max_buddy_number} />
						)
					}
					{
						(this.props.foriegner) ? null : (
							<Card
								label="Gender preference"
								content={this.props.user.gender_preference}/>
						)
					}
					<Card
						label="Language"
						content={this._parse_list()} />
				</ul>
			</div>
		)
	}
}

export default UserDetail
