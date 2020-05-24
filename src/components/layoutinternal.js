import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag";

import Header from './header'
import './layout.css'

const LayoutInternal = ({ children }) => (
  <StaticQuery

    render={data => (
      <MDXProvider
        components={{
          h2: props => <h2 {...props} className="uppercase pt-3 text-4xl leading-none _add_tracking_tightish" />,
          p: props => <p {...props} className="leading-normal my-6" />,
        }}
      >

        <div>
          {children}

          <Header siteTitle={data.site.siteMetadata.title}  >
          </Header>

        </div>


        Test text


        <footer
        style={{
          margin: '0 auto',
          paddingTop: "4em",
          paddingBottom: "4em",
          backgroundColor: '#3D372E',
          color: '#fff',
          textAlign: 'center',
        }}
        >
        <div class="dan-blue container mx-auto p-8">
          <h4>Would you like me to work with you? Get in touch</h4>
        </div>

        <div class="flex container mx-auto py-20">
          <div class="w-1/3 float-left "><img class="float-left w-16" src="/images/key-logo.svg" alt="Dan Coverdale logo" /></div>
          <div class="w-1/3 float-left text-left  p-4">
            <h4>This is a title</h4>
            <p class="py-4">Experienced digital designer with a demonstrated history of working in the design industry.
            Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX.</p>
          </div>
          <div class="w-1/3 float-left text-left  p-4">
            <h4>This is a title</h4>
            <p class="py-4">Experienced digital designer with a demonstrated history of working in the design industry.
            Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX.</p>
          </div>
        </div>

        </footer>

      </MDXProvider>
    )}
  />
)

LayoutInternal.propTypes = {
  siteTitle: PropTypes.string,
}

LayoutInternal.defaultProps = {
  siteTitle: '',
}

export default LayoutInternal
