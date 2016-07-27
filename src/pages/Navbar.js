import React, {PropTypes as T} from 'react'
import Navbar from 'components/navbars/'

const navbarItems = [
	{label: 'Home', href: '#'},
	{label: 'Tour', href: '#'},
	{label: 'Signup', href: '#'},
]

const NavbarPage = () => 
	<div id="Navbars">
		<h1>Navbars</h1>
		<hr/>
		<Navbar items={navbarItems} heading="Your Site" />
		<div></div>
		<Navbar inversed menuRight items={navbarItems} heading="Your Site" />
	</div>

NavbarPage.propTypes = {}
NavbarPage.defaultProps = {}

export default NavbarPage
