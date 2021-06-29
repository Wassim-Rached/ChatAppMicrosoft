import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"
import React from 'react'


const INITIAL_STATE = {
	user: {
		"profilePicture": "",
		"coverPicture": "",
		"followers": [],
		"followings": [],
		"isAdmin": false,
		"desc": "not defined",
		"city": "not defined",
		"from": "not defined",
		"relationship": 3,
		"_id": "60d9e8ad950ff20f04fb25aa",
		"username": "hossam",
		"email": "hossam@gmail.com",
		"password": "$2b$10$6DZ1LTpR04KmsjtXsFsxuuuLxvuuoOdFHqDA.FL4Z8sHnFCQyyMNW",
		"createdAt": "2021-06-28T15:20:13.080Z",
		"updatedAt": "2021-06-28T15:20:13.080Z",
		"__v": 0
	},
	isFetching: false,
	error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}