import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/tag";
import TitleBar from './TitleBar'
import HeaderGraphic from './HeaderGraphic'
import Callout from './callout'
import Header from './header'
import Footer from './footer'
import PortfolioGrid from './portfolio-grid'
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


        <HeaderGraphic />
        <TitleBar />

        <div
          style={{
            backgroundColor: "#3D372E",
            color: "#fff",
          }}
        >

        <div class="flex container mx-auto py-10 align-middle">
          <div class="w-1/2"><h1>UX Projects</h1></div>

          <div class="clearfix"></div>
        </div>


        </div>

        <PortfolioGrid />


        <Callout />

        <Footer />

      </MDXProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
