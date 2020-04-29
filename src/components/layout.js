import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag";

import Header from './header'
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

          </Header>


        </div>

        <div
          style={{
            padding: "3em",
          }}
        >

        <div class="flex">
          <div class="w-2/5 bg-gray-500 h-12">A</div>
          <div class="w-1/5 bg-gray-200 h-12">B</div>
          <div class="w-1/5 bg-gray-500 h-12">C</div>
          <div class="w-1/5 bg-gray-500 h-12">D</div>
        </div>
        <div class="flex">
          <div class="w-1/5 bg-gray-500 h-12">A</div>
          <div class="w-1/5 bg-gray-200 h-12">B</div>
          <div class="w-1/5 bg-gray-500 h-12">C</div>
          <div class="w-2/5 bg-gray-500 h-12">D</div>
        </div>



        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "3em",
          }}
        >

        <div class="flex mb-4">
          <div class="w-1/2 bg-gray-400 h-12"><h1>Portfolio intro text</h1></div>
          <div class="w-1/2 bg-gray-500 h-12"><h4 class="text-right">Work undertaken at Giant Digital - 2007-2020</h4></div>
        </div>


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
                <h2><a href="case1.html">A design system</a></h2>
            </div>
            <div class="portfolio-item" id="item2">
              <p>Non profit</p>
                <h2>Making wishes come true</h2>
            </div>
            <div class="portfolio-item" id="item3">
              <p>Non profit</p>
                <h2>A clearer vision</h2>
            </div>
            <div class="portfolio-item" id="item4">
              <p>Language school</p>
                <h2>The heart of Galway</h2>
            </div>
            <div class="portfolio-item">
              <p>Internal</p>
                <h2><a href="case1.html">A design system</a></h2>
            </div>
            <div class="portfolio-item">
              <p>Non profit</p>
                <h2>Making wishes come true</h2>
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
