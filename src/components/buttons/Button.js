import React, {PropTypes as T} from 'react'
import {Button as PureButton} from 'react-pure.css/src/components/buttons/'
import classnames from 'classnames'

const Button = (props) => {
	const _props = Object.assign({}, props, {
		className: classnames(props.className, 'impure-button')
	})
	return <PureButton {..._props}>{_props.label || _props.children}</PureButton>
}

Button.propTypes = {}

Button.defaultProps = {/* defaultProps goes here */}

export default Button
	