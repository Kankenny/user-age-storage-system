import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [error, setError] = useState()

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
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age (non-empty values are not allowed).',
			})
			return
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid age (age > 0).',
			})
			return
		}

		console.log(enteredUsername, enteredAge)

		props.onAddUser(enteredUsername, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}
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
