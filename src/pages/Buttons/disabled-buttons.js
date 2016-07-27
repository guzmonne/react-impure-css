import React, {PropTypes as T} from 'react'
import Button from 'components/buttons/'

const DisabledButtons = (props) => /*Function goes here*/
<div id="DisabledButtons">
	<Button disabled label="Default" />
	<span>{' '}</span>
	<Button disabled label="Primary" primary/>
	<span>{' '}</span>
	<Button disabled label="Secondary" secondary/>
	<span>{' '}</span>
	<Button disabled label="Success" success/>
	<span>{' '}</span>
	<Button disabled label="Error" error/>
	<span>{' '}</span>
	<Button disabled label="Warning" warning/>
</div>

DisabledButtons.propTypes = {/* propTypes goes here */}
DisabledButtons.defaultProps = {/* defaultProps goes here */}

export default DisabledButtons
		