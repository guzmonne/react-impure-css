import React, {PropTypes as T} from 'react'
import Button from 'components/buttons/'
import ActiveButtons from './active-buttons.js'
import DisabledButtons from './disabled-buttons.js'
import SizeButtons from './size-buttons.js'
import DropdownButtons from './dropdown-buttons.js'

const ButtonsPage = () => 
	<div id="Buttons">
		<h1>Buttons</h1>
		<hr/>
		<ActiveButtons />
		<br/>		
		<DisabledButtons />		
		<br/>
		<SizeButtons />
		<br/>
		<DropdownButtons />
	</div>

ButtonsPage.propTypes = {}
ButtonsPage.defaultProps = {}

export default ButtonsPage
