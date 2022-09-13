import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <form
        value="123123"
        method="data-member"
        enctype="text/plain"
        className="component1-form"
      >
        <input
          type="email"
          placeholder={props.textinput_placeholder}
          className="component1-textinput input"
        />
        <input
          type="password"
          placeholder={props.textinput_placeholder2}
          className="component1-textinput1 input"
        />
        <button className="component1-button button">{props.button}</button>
      </form>
    </div>
  )
}

Component1.defaultProps = {
  textinput_placeholder: 'username',
  textinput_placeholder1: 'password',
  textinput_placeholder2: 'password',
  button: 'Button',
}

Component1.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  button: PropTypes.string,
}

export default Component1
