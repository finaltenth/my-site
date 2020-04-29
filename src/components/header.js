import { Link } from 'gatsby'
import Navigation from './navigation'
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


    <div class="flex mb-4">
      <div class="w-1/2 bg-gray-400 h-12"><Navigation /></div>
      <div class="w-1/2 bg-gray-500 h-12"><img src="media/svg/key-logo.svg" /></div>
    </div>

    <div class="flex mb-4">
      <div class="w-1/2">
      <h1>Dan Coverdale is a full stack designer from Preston, Lancashire.</h1>
      <p class="py-4">Experienced digital designer with a demonstrated history of working in the design industry.
      Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX.</p>
      <p>Looking to refocus and text the next step in my career to provide value throughout a product lifecycle.</p>
      </div>

    </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
