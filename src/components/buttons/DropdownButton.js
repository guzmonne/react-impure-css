import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import Button from './Button.js'
import Menu from '../menus/'
import {ClickOutsideListener} from '../helpers/'

const buttonItems = [
	{label: '', items: [
		{label: 'Two'}, {label: 'Three'}
	]}
]

class DropdownButton extends React.Component {
	constructor(){
		super()
		this.classNames = this.classNames.bind(this)
		this.toggleDropdown = this.toggleDropdown.bind(this)
		this.state = {
			opened: false,
		}
	}

	classNames(){
		const {opened} = this.state
		return classnames('impure-button-dropdown', {
			'impure-button-dropdown-open': !!opened
		})
	}

	toggleDropdown(){
		const {opened} = this.state
		this.setState({opened: !opened})
	}

	render(){
		return (
			<ClickOutsideListener onClickOutside={this.toggleDropdown}>
				<div className={this.classNames()}>
					<Button {...this.props} /><Button className="impure-caret-down" onClick={this.toggleDropdown}/>
					<Menu bordered rounded horizontal items={buttonItems}/>
				</div>
			</ClickOutsideListener>
		)
	}
}

DropdownButton.propTypes = {
	label: T.string,
}
DropdownButton.defaultProps = {
	label: 'Something'
}

export default DropdownButton
