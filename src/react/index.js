import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from "./globalStyles.js";

import Header from "./Header.js";

function App(){
	return(
		<div> 
			<GlobalStyle/>
			<Header/>
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>,
	document.getElementById("root")
);
