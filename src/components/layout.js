import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag";

import Header from './header'
import Navigation from './navigation'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MDXProvider
        components={{
          h2: props => <h2 {...props} className="uppercase pt-3 text-4xl leading-none _add_tracking_tightish" />,
          p: props => <p {...props} className="leading-normal my-6" />,
        }}
      >

        <div
          style={{
            margin: '0 auto',
            maxWidth: 1290,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            backgroundColor: 'black',
          }}
        >
          {children}

          <Header siteTitle={data.site.siteMetadata.title}>
            <Navigation />
          </Header>

          <div class="px-2" id="image-grid">
            <div class="flex -mx-2">
              <div class="w-1/2 px-2">
                <div class="bg-gray-400 h-12">A</div>
              </div>
              <div class="w-1/2 px-2">
                <div class="bg-gray-500 h-12">B</div>
              </div>
              <div class="w-1/2 px-2">
                <div class="bg-gray-400 h-12">C</div>
              </div>
              <div class="w-1/2 px-2">
                <div class="bg-gray-400 h-12">A</div>
              </div>
              <div class="w-1/2 px-2">
                <div class="bg-gray-500 h-12">B</div>
              </div>
              <div class="w-1/2 px-2">
                <div class="bg-gray-400 h-12">C</div>
              </div>
            </div>
          </div>
        </div>



      </MDXProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
