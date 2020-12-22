import React, { useState } from "react";
import { AppBar , Button, Toolbar, Typography, Menu, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	dynamic_name: {
	  marginLeft: 50,
	  marginRight: 75,
	},
	menu: {
		marginLeft: 0,
	},
  }));

function Navbar(){

	const classes = useStyles();

	const [greed_menu, setGreedMenu] = useState(null);

	const handeClick = (event) => {
		setGreedMenu(event.currentTarget);
	}

	const handleClose = () => {
		setGreedMenu(null);
	}

	const [dynamic_menu, setDynamicMenu] = useState(null);

	const handleDynamicClick = (event) => {
		setDivideMenu(event.currentTarget);
	}

	const handleDynamicClose = () => {
		setDivideMenu(null);
	}

	const [divide_menu, setDivideMenu] = useState(null);

	const handleDivideClick = (event) => {
		setDivideMenu(event.currentTarget);
	}

	const handleDivideClose = () => {
		setDivideMenu(null);
	}

	const [other_menu, setOtherMenu] = useState(null);

	const handleOtherClick = (event) => {
		setOtherMenu(event.currentTarget);
	}

	const handleOtherClose = () =>{
		setOtherMenu(null);
	}

	return(
		<div className = {classes.root}>
			<AppBar position = "static">
				<Toolbar>
					<Typography variant="h6" color="inherit">MCS 401 Algorithms</Typography>
					<Typography variant="h6" color="inherit" className = {classes.dynamic_name}>Stable Matching Problem</Typography>

					<Button aria-controls="greedy-menu" aria-haspopup="true" onClick={handeClick}>Greedy Algorithms</Button>
					<Menu id="greedy-menu" anchorEl = {greed_menu} keepMounted open={Boolean(greed_menu)} onClose={handleClose}>
						<MenuItem onClick={handleClose}>Interval Scheduling</MenuItem>
						<MenuItem onClick={handleClose}>Scheduling to Minimize Lateness </MenuItem>
						<MenuItem onClick={handleClose}>Dijkstra's Algorithm </MenuItem>
						<MenuItem onClick={handleClose}>Kruskal's Algorithm </MenuItem>
						<MenuItem onClick={handleClose}>Prim's Algorithm</MenuItem>
					</Menu>

					<Button aria-controls="divide-menu" aria-haspopup="true" onClick={handleDynamicClick}>Divide and Conquer</Button>
					<Menu id="divide-menu" anchorEl = {divide_menu} keepMounted open={Boolean(divide_menu)} onClose={handleDynamicClose}>
						<MenuItem onClick={handleDivideClose}>MergeSort</MenuItem>
						<MenuItem onClick={handleDivideClose}>Counting Inversions</MenuItem>
						<MenuItem onClick={handleDivideClose}>Closest Pair of Points</MenuItem>
						<MenuItem onClick={handleDivideClose}>Integer Multiplication</MenuItem>
						<MenuItem onClick={handleDivideClose}>Fast Fourier Transform</MenuItem>
					</Menu>

					<Button aria-controls="dynamic-menu" aria-haspopup="true" onClick={handleDynamicClick}>Dynamic Programming</Button>
					<Menu id="dynamic-menu" anchorEl = {dynamic_menu} keepMounted open={Boolean(dynamic_menu)} onClose={handleDynamicClose}>
						<MenuItem onClick={handleDynamicClose}>Weighted Interval Scheduling</MenuItem>
						<MenuItem onClick={handleDynamicClose}>Segmented Least Squares</MenuItem>
						<MenuItem onClick={handleDynamicClose}>Subset Sum</MenuItem>
						<MenuItem onClick={handleDynamicClose}>Knapsack Problem</MenuItem>
						<MenuItem onClick={handleDynamicClose}>Bellman-Ford Algorithm</MenuItem>
					</Menu>

					<Button aria-controls="other-menu" aria-haspopup="true" onClick={handleOtherClick}>Other</Button>
					<Menu id="other-menu" anchorEl = {other_menu} keepMounted open={Boolean(other_menu)} onClose={handleOtherClose}>
						<MenuItem onClick={handleOtherClose}>Ford-Fulkerson Algorithm</MenuItem>
						<MenuItem onClick={handleOtherClose}>Breadth-First Search</MenuItem>
						<MenuItem onClick={handleOtherClose}>Depth-First Search</MenuItem>
						<MenuItem onClick={handleOtherClose}>Stable Matching Problem</MenuItem>
					</Menu>

				</Toolbar>
			</AppBar>
		</div>
	);
}
export default Navbar;
