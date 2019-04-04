import React from 'react';
import ReactDOM from 'react-dom';

export default class Users extends React.Component{
	render(){
		var friends = this.props.list.filter(function(user){
			return user.friend == true;
		})

		var nonFriends = this.props.list.filter(function(user){
			return user.friend !== true;
		})

		return (
			<div>
				<h1>Friends</h1>
				<ul>
					{friends.map(function(user){
						return <li key={user.name}>{user.name}</li>
					})}
				</ul>

				<hr/>

				<h1>Non Friends</h1>
				<ul>
					{friends.map(function(user){
						return <li key={user.name}>{user.name}</li>
					})}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(
	<Users list={[
		{ name:'sam' ,friend: true },
		{ name:'Jack', friend: true },
		{ name:'Ryan', friend: false },
		{ name:'Brad', friend: false },
		{name: 'Jim' , friend: true },
		{name: 'Ricky', friend: true}
		]} />,
	document.getElementById("root")
);