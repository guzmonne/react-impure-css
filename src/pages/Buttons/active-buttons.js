import React, {PropTypes as T} from 'react'
import Button from 'components/buttons/'

const ActiveButtons = (props) => /*Function goes here*/
<div id="ActiveButtons">
	<Button label="Default" />
	<span>{' '}</span>
	<Button label="Primary" primary/>
	<span>{' '}</span>
	<Button label="Secondary" secondary/>
	<span>{' '}</span>
	<Button label="Success" success/>
	<span>{' '}</span>
	<Button label="Error" error/>
	<span>{' '}</span>
	<Button label="Warning" warning/>
</div>

ActiveButtons.propTypes = {/* propTypes goes here */}
ActiveButtons.defaultProps = {/* defaultProps goes here */}

export default ActiveButtons
		