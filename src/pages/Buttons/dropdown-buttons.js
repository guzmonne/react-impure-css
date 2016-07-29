import React, {PropTypes as T} from 'react'
import {DropdownButton} from 'components/buttons/'
import {dropdownItems} from './fixtures.js'

const DropdownButtons = (props) => /*Function goes here*/
<div id="DropdownButtons">
	<DropdownButton label="Default" items={dropdownItems} />
	<DropdownButton label="Default" primary items={dropdownItems} />
	<DropdownButton label="Default" secondary items={dropdownItems} />
	<DropdownButton label="Default" success items={dropdownItems} />
	<DropdownButton label="Default" error items={dropdownItems} />
	<DropdownButton label="Default" warning items={dropdownItems} />
</div>

DropdownButtons.propTypes = {/* propTypes goes here */}
DropdownButtons.defaultProps = {/* defaultProps goes here */}

export default DropdownButtons
		