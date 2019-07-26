import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from 'components/views/Main'
import { UserForm } from 'components/views/User'
import Toolbar from 'components/molecules/Toolbar'
import NotFound from 'components/views/NotFound'

import 'styles/App.css';

let Unimplemented = () => (
	<div>
		Unimplemented yet
	</div>
)

export default function MainComponent() {
	return (
		<div className="App">
			<BrowserRouter>
				<Toolbar />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/signup" component={Unimplemented} />
					<Route exact path="/signin" component={Unimplemented} />
					<Route exact path="/signout" component={Unimplemented} />
					<Route exact path="/matching" component={Unimplemented} />
					<Route exact path="/user/edit" component={UserForm} />
					<Route exact path="/user/:id" component={Unimplemented} />
					<Route exact path="/activity/add" component={Unimplemented} />
					<Route exact path="/activity/list" component={Unimplemented} />
					<Route exact path="/activity/report" component={Unimplemented} />
					<Route exact path="/activity/report/add" component={Unimplemented} />
					<Route exact path="/admin/users" component={Unimplemented} />
					<Route exact path="/admin/activity" component={Unimplemented} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
  );
}
