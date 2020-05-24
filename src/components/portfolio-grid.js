import React from "react"
function PortfolioGrid(props) {
  return (

    <div
      style={{
        backgroundColor: '#FF6A3C',
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
  )
}
export default PortfolioGrid
