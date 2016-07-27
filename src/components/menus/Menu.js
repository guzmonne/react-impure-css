import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import {Menu as PureMenu} from 'react-pure.css/src/components/menus/'

const Menu = (props) => {
	const {bordered, rounded, className} = props
	const classNames = classnames(className, {
		'impure-menu-bordered': !!bordered,
		'impure-menu-rounded': !!bordered && !!rounded
	})
	const _props = Object.assign({}, props)
	delete _props.className
	return <PureMenu className={classNames} {..._props} />
}

Menu.propTypes = {
	bordered: T.bool,
	rounded: T.bool,
	className: T.string,
}
Menu.defaultProps = {/* defaultProps goes here */}

export default Menu
	