import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import {Item as PureItem} from 'react-pure.css/src/components/menus/'

const Item = (props) => {
	if (!!props.divider)
		return <div className="impure-menu-divider"></div>
	return <PureItem {...props} />
}

Item.propTypes = {}
Item.defaultProps = {/* defaultProps goes here */}

export default Item
	