import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <form className="component-form">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="component-textinput input"
        />
        <input
          type="password"
          placeholder={props.textinput_placeholder1}
          className="component-textinput1 input"
        />
        <button className="component-button button">{props.button}</button>
      </form>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'username',
  textinput_placeholder1: 'password',
  button: 'Button',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
