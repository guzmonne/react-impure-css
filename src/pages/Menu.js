import React, {PropTypes as T} from 'react'
import Menu from 'components/menus/'

const menuItems = [
	{label: 'Navbar', href:'#Navbars'},
	{label: 'Buttons', href: '#Buttons'},
	{label: 'Typography'},
	{label: 'Menus'},
	{label: 'Tables'},
	{label: 'Forms'},
	{label: 'Navs'},
	{label: 'Indicators'},
	{label: 'Progress Bars'},
	{label: 'Containers'},
	{label: 'Dialogs'},
]

const MenuPage = () => 
	<div id="Menus">
		<Menu width="200px" bordered rounded items={menuItems} />
	</div>

MenuPage.propTypes = {}
MenuPage.defaultProps = {}

export default MenuPage
