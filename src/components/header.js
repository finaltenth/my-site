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



</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
