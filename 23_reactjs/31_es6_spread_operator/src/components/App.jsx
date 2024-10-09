import React, { useState } from "react";

const App = () => {
	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setContact((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	return (
		<div className="container">
			<h1>
				Hello {contact.firstName} {contact.lastName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input onChange={handleChange} name="firstName" placeholder="First Name" value={contact.firstName} />
				<input onChange={handleChange} name="lastName" placeholder="Last Name" value={contact.lastName} />
				<input onChange={handleChange} name="email" placeholder="Email" value={contact.email} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default App;
