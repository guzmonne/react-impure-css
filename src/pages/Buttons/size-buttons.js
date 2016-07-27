import React, {PropTypes as T} from 'react'
import Button from 'components/buttons/'

const SizeButtons = (props) => /*Function goes here*/
<div id="SizeButtons">
	<Button label="xSmall" xsmall/>
	<span>{' '}</span>
	<Button label="Small" small/>
	<span>{' '}</span>
	<Button label="Normal"/>
	<span>{' '}</span>
	<Button label="Large" large/>
	<span>{' '}</span>
	<Button label="xLarge" xlarge/>
</div>

SizeButtons.propTypes = {/* propTypes goes here */}
SizeButtons.defaultProps = {/* defaultProps goes here */}

export default SizeButtons
		