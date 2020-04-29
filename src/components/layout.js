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
          }}
        >
          {children}

          <Header siteTitle={data.site.siteMetadata.title}  >
            <Navigation />
          </Header>


        </div>

        <div Style="backgroundColor: orange">

        <section id="portfolio">
        <div class="container max-width">
            <div class="item" id="item1" >
              <p>Internal</p>
                <h3><a href="case1.html">A design system</a></h3>
            </div>
            <div class="item" id="item2">
              <p>Non profit</p>
                <h3>Making wishes come true</h3>
            </div>
            <div class="item" id="item3">
              <p>Non profit</p>
                <h3>A clearer vision</h3>
            </div>
            <div class="item" id="item4">
              <p>Language school</p>
                <h3>The heart of Galway</h3>
            </div>
            <div class="item">
              <p>Internal</p>
                <h3><a href="case1.html">A design system</a></h3>
            </div>
            <div class="item">
              <p>Non profit</p>
                <h3>Making wishes come true</h3>
            </div>

          </div>
        <h4>Work undertaken at Giant Digital - 2007-2020</h4>
        </section>

        </div>


        <footer
        style={{
          margin: '0 auto',
          padding: '2rem',
          paddingTop: '2rem',
          backgroundColor: '#2b2b2b',
          color: 'white',
          textAlign: 'center',
        }}
        >
        This is the footer
        </footer>

      </MDXProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
