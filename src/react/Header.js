import React from "react";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
	background: #9ad3bc;
	padding:10px;
`
function Header(){
	return(
		<Container>
			<h1>MCS 401 Algorithms</h1>
		</Container>
	);
}

export default Header;
