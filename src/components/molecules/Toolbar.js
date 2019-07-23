import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'styles/Toolbar.css'

/* link의 정보를 담고 있는 list입니다. 
 *	Arguments
 *			title: 메뉴에 표시되는 이름입니다.
 *			link: 클릭시 이동할 주소입니다.
 *			auth: 권한 레벨에 따른 표시 여부입니다.
 *					0: Unauthorized
 *					1: 외국인 권한
 *					2: 한국인 권한
 *					3: 조장/부조장 권한
 *					4: 관리자 권한
 */
let clickableLinks = [
	{ title: 'Sign Up', link: '/signup', auth: 0 },
	{ title: 'Sign In', link: '/signin', auth: 0 },
	{ title: 'Sign Out', link: '/signout', auth: 1 },
	{ title: 'Matching', link: '/matching', auth: 1 },
	{ title: 'Mypage', link: '/mypage', auth: 1},
	{ title: '활동 등록', link: '/activity/add', auth: 2},
	{ title: '활동 목록', link: '/activity/list', auth: 2},
	{ title: '활동평가서 작성', link: '/activity/report', auth: 2},
	{ title: '인원 관리', link: '/admin/users', auth: 4},
	{ title: '활동 관리', link: '/admin/activity', auth: 4},
]

class Toolbar extends Component {

	state = {
		auth: 4
	}

	render() {
		return (
			<nav className="toolbar">
				<p className="toolbar__title"> SNU BUDDY </p>
				<ul className="toolbar-list">
					{
						(this.state.auth === 0) ? (
							clickableLinks.map( item => (
								(item.auth === 0) ? (
									<li className="toolbar-list__item" key={item.title}>
										<Link className="toolbar-list__link" to={item.link}>
											{item.title}
										</Link>
									</li>
								) : null
							))
						)	: (
							clickableLinks.map( item => (
								(item.auth <= this.state.auth && item.auth > 0) ? (
									<li className="toolbar-list__item" key={item.title}>
										<Link className="toolbar-list__link" to={item.link}>
											{item.title}
										</Link>
									</li>
								) : null
							))
						)
					}
				</ul>
			</nav>
		)
	}
}

export default Toolbar
