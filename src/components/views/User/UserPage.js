import React, { Component } from 'react'
import UserDetail from './UserDetail'

import 'styles/UserPage.css'

const _ex_user = {
	first_name: 'Dongwoo',
	last_name: 'Kim',
	email: 'dhsodhao52@snu.ac.kr',
	gender: 'male',
	birth: '1998-12-16',
	country: 'Korea, Repbulic of',
	major: 'Computer Science and Engineering',
	hobby: 'Weight Training',
	interest: 'powerlifting, bodybuilding',
	self_introduction: '헬붕이',
	comment: '운동하고싶다',
	max_buddy_number: 5,
	gender_preference: 'both',
	language: [ 
		{name: 'Korean', level: 'fluent'},
		{name: 'English', level: 'intermediate'}],
	personal_buddy: []
}

class UserPage extends Component{

	render() {
		return (
			<div className="user-page-wrapper">
				<div className="user-page">
					<div className="user-detail-wrapper">
						<h1 className="user-page__title"> User detail </h1>
						<UserDetail
							user={_ex_user}
							foriegner={false}
						/>
					</div>
					<div className="user-detail-wrapper">
						<h1 className="user-page__title"> Matched Buddies </h1>
						{
							_ex_user.personal_buddy.map(user => (
								<UserDetail
									user={user}
									forienger={true}
								/>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}

export default UserPage
