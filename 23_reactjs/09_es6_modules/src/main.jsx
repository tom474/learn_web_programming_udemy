import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<>
			<ul>
				<li>{pi}</li>
				<li>{doublePi()}</li>
				<li>{triplePi()}</li>
			</ul>
		</>
	</React.StrictMode>
);
