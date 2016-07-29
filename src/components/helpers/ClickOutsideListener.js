import React, {PropTypes as T} from 'react';
import ReactDOM from 'react-dom';

class ClickOutsideListener extends React.Component {
  constructor(){
    super()
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  componentDidMount () {
    if (!!window && !!window.__app_container)
      window.__app_container.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount () {
    if (!!window && !!window.__app_container)
      window.__app_container.removeEventListener('click', this.handleDocumentClick)
  }

  handleDocumentClick(e) {
    const area = ReactDOM.findDOMNode(this.refs.area);
    if (!area.contains(e.target)) {
      this.props.onClickOutside(e)
    }
  }

  render () {
    return (
      <span ref='area' class="click-outside-container">
       {this.props.children}
      </span>
    )
  }
}

ClickOutsideListener.propTypes = {
  children: T.element.isRequired,
  onClickOutside: T.func.isRequired,
}

export default ClickOutsideListener