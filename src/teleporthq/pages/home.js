import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>The One</title>
        <meta property="og:title" content="The One" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2"></div>
        <div className="home-container3">
          <div className="home-container4">
            <form
              enctype="application/x-www-form-urlencoded"
              className="home-form input"
            >
              <input
                type="email"
                placeholder="username"
                className="home-textinput input"
              />
              <input
                type="password"
                placeholder="password"
                className="home-textinput1 input"
              />
              <button type="submit" className="home-button button">
                Button
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
