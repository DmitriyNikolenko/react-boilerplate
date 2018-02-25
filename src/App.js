import React from 'react'
import logo from './images/logo.svg'
import '../style.css'


/** */
export default function App(){
	return (
		<div className="App">
			<img className="App-Logo" src={logo} alt="React Logo" />
			<h1 className="App-Title">Hello Parcel x React</h1>
		</div>
	)
}