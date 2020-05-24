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
            backgroundColor: "#3D372E",
            color: "#fff",
          }}
        >

        <div class="flex container mx-auto py-10 align-middle">
          <div class="w-1/2"><h1>The work</h1></div>

          <div class="clearfix"></div>
        </div>


        </div>


        <div
          style={{
            backgroundColor: "#FF6A3C",
            padding: "3em",
          }}
        >

        <section id="portfolio">
        <div class="portfolio-container container mx-auto py-8">
            <div class="portfolio-item" id="item1" >
              <p>Side project</p>
                <h3 class="py-4">Something personal</h3>
            </div>
            <div class="portfolio-item" id="item2">
              <p>Non profit</p>
                <h3 class="py-4">Making wishes come true</h3>
            </div>
            <div class="portfolio-item" id="item3">
              <p>Non profit</p>
                <h3 class="py-4">A clearer vision</h3>
            </div>
            <div class="portfolio-item" id="item4">
              <p>Language school</p>
                <h3 class="py-4">The heart of Galway</h3>
            </div>
            <div class="portfolio-item" id="item2">
              <p>Internal</p>
                <h3 class="py-4">A clearer vision</h3>
            </div>
            <div class="portfolio-item" id="item3">
              <p>Non profit</p>
                <h3 class="py-4">A clearer vision</h3>
            </div>
            <div class="clearfix"></div>
          </div>
        </section>

        </div>

        <div class="page-divide py-4"
        style={{
          backgroundColor: "#FF6A3C",
        }}
          >
        </div>


        <div
        style={{
          backgroundColor: "#FFEFEA",
        }}
          >
          <div class="flex container mx-auto py-20">
          <div class="w-1/2 pr-12"><h3>Lets talk</h3></div>
          <div class="w-1/2 pr-12"><p class="text-left">Experienced digital designer with a demonstrated history of working in the design industry.
          Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX. Looking to take on a role in a larger organisation, or a non profit.</p></div>
        </div>

        </div>

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

        </footer>

      </MDXProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
