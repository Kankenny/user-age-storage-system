import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value)
	}

	const addUserHandler = (event) => {
		event.preventDefault()

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0 ||
			+enteredAge < 1
		) {
			return
		}

		console.log(enteredUsername, enteredAge)

		props.onAddUser(enteredUsername, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}

	return (
		<div>
			<ErrorModal
				title="An error occurred"
				message="Something went wrong"
			></ErrorModal>
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="Age">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						onChange={ageChangeHandler}
						value={enteredAge}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default AddUser
