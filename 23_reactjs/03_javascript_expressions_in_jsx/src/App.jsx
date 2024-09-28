import React from "react";

const firstName = "Cuong";
const lastName = "Tran";
const luckyNumber = 8;
const currentDate = new Date();
const year = currentDate.getFullYear();

function App() {
	return (
		<>
			<h1>Hello {firstName + " " + lastName}</h1>
			<p>Your lucky number is {luckyNumber}</p>
			<p>Created by {firstName}</p>
			<p>Copyright @{year}</p>
		</>
	);
}

export default App;
