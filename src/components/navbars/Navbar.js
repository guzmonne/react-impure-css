import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import Menu from '../menus/'

const Navbar = (props) => {
	const {fixed, inversed, menuRight} = props
	const _props = Object.assign({}, props, {
		className: classnames(props.className, 'impure-navbar', {
			'impure-navbar-fixed': !!fixed,
			'impure-navbar-inverse': !!inversed,
			'impure-navbar-menu-right': !!menuRight,
		})
	})
	return <Menu {..._props} horizontal></Menu>
}

Navbar.propTypes = {
	fixed: T.bool,
	inversed: T.bool,
	menuRight: T.bool,
}

Navbar.defaultProps = {/* defaultProps goes here */}

export default Navbar
	