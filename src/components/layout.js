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
            padding: "3em",
          }}
        >

        <div class="animation-container">
        <div class="flex">
          <div id ="animation1" class="w-2/5 dan-blue flex-square"></div>
          <div id="animation2" class="w-1/5 dan-blue flex-square"></div>
          <div id="animation3" class="w-1/5 dan-orange flex-square"></div>
          <div id="animation4" class="w-1/5 dan-white flex-square"></div>
        </div>
        <div class="flex">
          <div id="animation5" class="w-1/5 dan-blue flex-square"></div>
          <div id="animation6" class="w-1/5 dan-white flex-square"></div>
          <div id="animation7" class="w-1/5 dan-black flex-square"></div>
          <div id="animation8" class="w-2/5 dan-white flex-square"></div>
        </div>
        </div>
        </div>


        <div
          style={{
            backgroundColor: "#3D372E",
            color: "#fff",
          }}
        >

        <div class="flex container mx-auto py-10">
          <div class="w-1/2 h-12"><h1>The work</h1></div>
          <div class="w-1/2 h-12"><h4 class="text-right">Work undertaken at Giant Digital - 2007-2020</h4></div>
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
        <div class="portfolio-container container mx-auto">
            <div class="portfolio-item" id="item1" >
              <p>Internal</p>
                <h3 class="py-4"><a href="case1.html">A design system</a></h3>
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
                <h3 class="py-4"><a href="case1.html">A design system</a></h3>
            </div>
            <div class="portfolio-item" id="item3">
              <p>Non profit</p>
                <h3 class="py-4">Making wishes come true</h3>
            </div>

          </div>
        </section>

        </div>

        <div class="page-divide"
        style={{
          backgroundColor: "#FF6A3C",
        }}
          >
          <img src="/images/triangle-divide.svg" alt="Dan Coverdale logo" />
        </div>


        <div
        style={{
          backgroundColor: "#FFEFEA",
        }}
          >
          <div class="flex mb-4 container mx-auto p-8">
          <div class="w-1/2 bg-gray-400 h-12 pr-8"><h3>I’m currently taking on new projects, and open to new employment opportunities.</h3></div>
          <div class="w-1/2 bg-gray-500 h-12"><p class="text-left">Experienced digital designer with a demonstrated history of working in the design industry.
          Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX. Looking to take on a role in a larger organisation, or a non profit.</p></div>
          <div class="clearfix"></div>
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
