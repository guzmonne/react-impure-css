import React, {PropTypes as T} from 'react'
import classnames from 'classnames'
import Button from './Button.js'
import Menu from '../menus/'
import {ClickOutsideListener} from '../helpers/'

class DropdownButton extends React.Component {
	constructor(){
		super()
		this.classNames = this.classNames.bind(this)
		this.toggleDropdown = this.toggleDropdown.bind(this)
		this.closeDropdown = this.closeDropdown.bind(this)
		this.state = {
			opened: false,
		}
	}

	classNames(){
		const {opened} = this.state
		return classnames('impure-button-dropdown-menu', {
			'impure-button-dropdown-menu__open': !!opened
		})
	}

	toggleDropdown(){
		const {opened} = this.state
		this.setState({opened: !opened})
	}

	closeDropdown(){
		this.setState({opened: false})
	}

	pruneProps(){
		const keys = ['primary', 'secondary', 'success', 'warning', 'error', 'disabled']
		return Object.keys(this.props)
			.filter(key => keys.indexOf(key) > -1)
			.reduce((props, key) => Object.assign({}, props, {[key]: this.props[key]}), {})
	}

	render(){
		const {items} = this.props
		return (
			<ClickOutsideListener onClickOutside={this.closeDropdown}>
				<div className="impure-button-dropdown">
					<Button {...this.props} />
					<Button 
						className="impure-caret-down"
						active={!!this.state.opened}
						onClick={this.toggleDropdown}
						{...this.pruneProps()}
					/>
					<div className={this.classNames()} onClick={this.closeDropdown}>
						<Menu items={items} />
					</div>
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
