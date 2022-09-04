import React, { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
	const [usersList, setUsersList] = useState([])
	const arrLength = usersList.length

	const addUserHandler = (username, userAge) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: username, age: userAge }]
		})
	}

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			{arrLength !== 0 && <UsersList users={usersList}></UsersList>}
		</div>
	)
}

export default App
