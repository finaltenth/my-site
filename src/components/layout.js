import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/tag';

import Header from './header';

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
          h2: props => (
            <h2
              {...props}
              className="uppercase pt-3 text-4xl leading-none _add_tracking_tightish"
            />
          ),
          p: props => <p {...props} className="leading-normal my-6" />
        }}
      >
        <div>
          {children}

          <Header siteTitle={data.site.siteMetadata.title}></Header>
        </div>

        <div className="animation-container">
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
            {/* First Row 👇 */}
            <div className="pb-1/2 dan-blue relative">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1c0947494ecb28e42b408626d726b7c1603180ee/32c6f/images/triangles-left-black.svg"
                alt="Dan Coverdale"
                className="absolute w-100 h-full top-0 left-0 m-0 object-cover"
              />
            </div>
            <div class="pb-100 dan-blue relative">Something else</div>
            <div class="pb-1/2 dan-orange relative">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/27578ce60ff5075644fd1afb7f4f16371c2e88ac/f63dc/images/triangles-vertical.svg"
                alt="Dan Coverdale"
                className="absolute w-100 h-full top-0 left-0 m-0 object-cover"
              />
            </div>
            <div class="pb-100 dan-white relative">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/b081bc57b3435778e9ba9e2b340e5e5b4174f407/ac283/images/hal.svg"
                alt="Dan Coverdale"
                className="absolute w-100 h-full top-0 left-0 m-0 object-cover"
              />
            </div>

            {/* Second Row 👇 */}

            <div class="pb-100 dan-blue relative">Something else</div>
            <div className="pb-1/2 dan-white relative">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/b9dfb37f04253bcce02a63cf95c45db6526027a6/c2aa0/images/star.svg"
                alt="Dan Coverdale"
                className="absolute w-100 h-full top-0 left-0 m-0 object-cover"
              />
            </div>
            <div class="pb-100 dan-black relative">Something else</div>
            <div class="pb-1/2 dan-white relative">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1c0947494ecb28e42b408626d726b7c1603180ee/32c6f/images/triangles-left-black.svg"
                alt="Dan Coverdale"
                className="absolute w-100 h-full top-0 left-0 m-0 object-cover"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#fff',
            padding: '3em'
          }}
        >
          <div class="flex mb-4 container mx-auto">
            <div class="w-1/2 bg-gray-400 h-12">
              <h1>The work</h1>
            </div>
            <div class="w-1/2 bg-gray-500 h-12">
              <h4 class="text-right">
                Work undertaken at Giant Digital - 2007-2020
              </h4>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#FF6A3C',
            padding: '3em'
          }}
        >
          <section id="portfolio">
            <div class="portfolio-container container mx-auto">
              <div class="portfolio-item py-4" id="item1">
                <p>Internal</p>
                <h3 class="py-4">
                  <a href="case1.html">A design system</a>
                </h3>
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
                <h3 class="py-4">
                  <a href="case1.html">A design system</a>
                </h3>
              </div>
              <div class="portfolio-item" id="item3">
                <p>Non profit</p>
                <h3 class="py-4">Making wishes come true</h3>
              </div>
            </div>
          </section>
        </div>

        <div
          style={{
            backgroundColor: '#FFEFEA'
          }}
        >
          <div class="flex mb-4 container mx-auto p-8">
            <div class="w-1/2 bg-gray-400 h-12 pr-8">
              <h3>
                I’m currently taking on new projects, and open to new employment
                opportunities.
              </h3>
            </div>
            <div class="w-1/2 bg-gray-500 h-12">
              <p class="text-left">
                Experienced digital designer with a demonstrated history of
                working in the design industry. Skilled in all aspects of
                digital design, proficient in Sketch and the Adobe Creative
                suite through to UI/UX. Looking to take on a role in a larger
                organisation, or a non profit.
              </p>
            </div>
          </div>

          <div class="clearfix"></div>
        </div>

        <footer
          style={{
            margin: '0 auto',
            paddingTop: '4em',
            paddingBottom: '4em',
            backgroundColor: '#3D372E',
            color: '#fff',
            textAlign: 'center'
          }}
        >
          <div class="dan-blue container mx-auto p-8">
            <h4>Would you like me to work with you? Get in touch</h4>
          </div>
        </footer>
      </MDXProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
