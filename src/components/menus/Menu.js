import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import {Menu as PureMenu} from 'react-pure.css/src/components/menus/'

const Menu = (props) => {
	const {bordered, rounded, className} = props
	const _props = Object.assign({}, props, {
		className: classnames(props.className, {
			'impure-menu-bordered': !!bordered,
			'impure-menu-rounded': !!bordered && !!rounded
		})
	})
	return <PureMenu {..._props} />
}

Menu.propTypes = {
	bordered: T.bool,
	rounded: T.bool,
	className: T.string,
}
Menu.defaultProps = {/* defaultProps goes here */}

export default Menu
	