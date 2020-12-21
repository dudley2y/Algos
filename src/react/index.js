import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./globalStyles.js";

import Navbar from "./components/Navbar.js";
import Stable_Matching from "./components/algorithms/stable_matching.js";

function App(){
	return(
		<div> 
			<GlobalStyle/>
			<Navbar/>
			<Stable_Matching/>
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>,
	document.getElementById("root")
);
