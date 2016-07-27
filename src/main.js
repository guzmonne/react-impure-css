import React from 'react'
import {Grid, Unit} from 'react-pure.css/src/components/grids/'
import MenuPage from 'pages/Menu.js'
import NavbarPage from 'pages/Navbar.js'
import ButtonsPage from 'pages/Buttons/'

class Main extends React.Component {
	render(){
		return (
			<Grid margin="0 auto">
				{/*HEADER*/}
				<Unit pad sm="1"><h1>React Impure.CSS</h1></Unit>
				{/*MENU*/}
				<Unit pad sm="1"><MenuPage /></Unit>
				{/*HEADER*/}
				<Unit pad sm="1"><NavbarPage /></Unit>
				{/*BUTTONS*/}
				<Unit pad sm="1"><ButtonsPage /></Unit>
				{/*FOOTER*/}
				<Unit pad sm="1"><div style={{display: 'block', height: '300px'}}></div></Unit>
			</Grid>
		)
	}
}

export default Main