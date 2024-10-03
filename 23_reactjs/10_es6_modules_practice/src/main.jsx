import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { add, multiply, subtract, divide } from "./calculator";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<>
			<ul>
				<li>{add(1, 2)}</li>
				<li>{multiply(2, 3)}</li>
				<li>{subtract(7, 2)}</li>
				<li>{divide(5, 2)}</li>
			</ul>
		</>
	</React.StrictMode>
);
