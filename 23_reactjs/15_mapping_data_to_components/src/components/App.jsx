import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function createCard(contact) {
	return <Card key={contact.id} name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email} />;
}

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<Avatar img="./avatar.png" />
			{contacts.map(createCard)}
		</div>
	);
}

export default App;
