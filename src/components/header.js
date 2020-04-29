import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, children }) => (

  <div
    style={{
      margin: '0 auto',
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
      color: '#FFEFEA',
      backgroundColor: '#3D372E',
    }}
  >
    {children}
    <section>
      <div class="logo"><img src="media/svg/key-logo.svg" /></div>
      <div class="intro">
        <h1>Dan Coverdale is a full stack designer from Preston, Lancashire.</h1>
        <p>Experienced digital designer with a demonstrated history of working in the design industry. Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX.
        I'm looking to refocus and text the next step in my career to provide value throughout a product lifecycle.</p>
        <div class="learning">
        <h3>This week i'm exploring</h3>
        <p>Card sorting methodologies</p></div>
      </div>



    </section>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
