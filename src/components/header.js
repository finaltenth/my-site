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

    <div class="flex mb-4 container mx-auto py-10">
      <div id="nav" class="w-1/2 h-12"><Navigation /></div>
      <div class="w-1/2 h-16 float-right logo"><img class="float-right" src="/images/key-logo.svg" alt="Dan Coverdale logo" /></div>
    </div>


    

    <div id="intro-text" class="flex mb-4 container mx-auto content-center">
      <div class="w-3/5 py-10 ">
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
