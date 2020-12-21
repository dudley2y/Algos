import React from "react";
import styled from "styled-components";

const Container = styled.div`
	overflow: hidden;
	background-color: #9ad3bc;
	font-family: Arial;	
`

const Navbar_Item = styled.h1`
	float: left;
	font-size: 16px;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	padding-left: 100px;	
`

const Drop_Down_Content = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 1;
`

const Algorithms_DropDown = styled.div`
	float: left;
	overflow: hidden;
	padding-left:50px;

	:hover ${Drop_Down_Content}{
		display: block;
	}
`

const Drop_Button = styled.button`
	font-size: 16px;
	border: none;
	outline: none;
	background-color: #D39AB1;
	color: white;
	padding: 14px 16px;
	font-family: inherit; /* Important for vertical align on mobile phones */
	margin: 0; /* Important for vertical align on mobile phones */
`
const Item = styled.a`
	float: none;
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: left;

	:hover{
		background-color: #ddd;
	}
`

function Navbar(){
	return(

		<Container>
			<Navbar_Item>MCS 401 Algorithms</Navbar_Item>
			<Navbar_Item>Something</Navbar_Item>
			
			<Algorithms_DropDown>
				<Drop_Button>Greedy Algorithms</Drop_Button>
				<Item href="/Interval_Scheduling"    		>Interval Scheduling</Item>
				<Item href="/Minimalizing_Latency"   		>Minimalizing Latency</Item>
				<Item href="/Dijkstra's_Algorithm"   		>Dijkstra's</Item>
				<Item href="/Kruskal's_Algorithm"    		>Kruskal's</Item>
				<Item href="/Prim's_Algorithm"       		>Prim's</Item>
			</Algorithms_DropDown>
			
			<Algorithms_DropDown>
				<Drop_Button>Divide and Conquer</Drop_Button>
				<Item href="/Mergesort"              		>Mergesort</Item>
				<Item href="/Counting_Inversions"    		>Counting Inversions</Item>
				<Item href="/Closest_Pair_of_Points" 		>Closest Pair of Points </Item>
				<Item href="/Integer_Multiplcation"  		>Integer Multiplcation</Item>
				<Item href="/Fast_Fourier_Transform" 		>Fast Fourier Transform</Item>
			</Algorithms_DropDown>

			<Algorithms_DropDown>
				<Drop_Button>Dynamic Algorithms</Drop_Button>
				<Item href="/Weighted_Interval_Scheduling"  >Weighted Interval Scheduling</Item>
				<Item href="/Segmented_Least_Squares"		>Segmented Least Squares</Item>
				<Item href="/Subset_Sum"					>Subset Sum</Item>
				<Item href="/Knapsack_Problem"				>Knapsack Problem</Item>
				<Item href="/Bellman-Ford_Algorithm"		>Bellman-Ford Algorithm</Item>
			</Algorithms_DropDown>

			<Algorithms_DropDown>
				<Drop_Button>Other</Drop_Button>
				<Drop_Down_Content>
					<Item href="/Stable_Matching_Problem"	>Stable Matching Problem</Item>
					<Item href="/Breadth_First_Search"   	>Breadth_First_Search</Item>
					<Item href="/Depth_First_Search"     	>Depth_First_Search</Item>
					<Item href="/Topogical_Orderings"    	>Topological Orderings</Item>
					<Item href="/Ford-Fulkerson_Algorithm"	>Ford-Fulkererson</Item>
				</Drop_Down_Content>
			</Algorithms_DropDown>
		
		</Container>
	);
}
export default Navbar;
