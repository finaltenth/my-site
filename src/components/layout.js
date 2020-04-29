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

        <div>
          {children}

          <Header siteTitle={data.site.siteMetadata.title}  >
            <Navigation />
          </Header>


        </div>

        <div
          style={{
            backgroundColor: "#0096C2",
            padding: "3em",
          }}
        >
        Pattern block here
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "3em",
          }}
        >
        <h2>Portfolio intro text</h2>
        <h4 class="text-center py-4">Work undertaken at Giant Digital - 2007-2020</h4>
        </div>


        <div
          style={{
            backgroundColor: "#FF6A3C",
            padding: "3em",
          }}
        >

        <section id="portfolio">
        <div class="portfolio-container max-width">
            <div class="portfolio-item" id="item1" >
              <p>Internal</p>
                <h3><a href="case1.html">A design system</a></h3>
            </div>
            <div class="portfolio-item" id="item2">
              <p>Non profit</p>
                <h3>Making wishes come true</h3>
            </div>
            <div class="portfolio-item" id="item3">
              <p>Non profit</p>
                <h3>A clearer vision</h3>
            </div>
            <div class="portfolio-item" id="item4">
              <p>Language school</p>
                <h3>The heart of Galway</h3>
            </div>
            <div class="portfolio-item">
              <p>Internal</p>
                <h3><a href="case1.html">A design system</a></h3>
            </div>
            <div class="portfolio-item">
              <p>Non profit</p>
                <h3>Making wishes come true</h3>
            </div>

          </div>
        </section>

        </div>

        <div
        style={{
          backgroundColor: "#FFEFEA",
          padding: "3em",
        }}
          >
          Text block
        </div>


        <footer
        style={{
          margin: '0 auto',
          padding: '2rem',
          paddingTop: '2rem',
          backgroundColor: '#3D372E',
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
