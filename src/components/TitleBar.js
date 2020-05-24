import React from 'react';

const TitleBar = ({ bkgdColor }) => (

  <div
    style={{
      backgroundColor: '#3D372E',
      padding: '1em',
    }}
  >


  <div id="intro-text" class="flex mb-4 container mx-auto content-center">
    <div class="w-3/5 py-6 ">
    <h1>Dan Coverdale is a full stack designer from Preston, Lancashire.</h1>
    <p class="py-4">Experienced digital designer with a demonstrated history of working in the design industry.
    Skilled in all aspects of digital design, proficient in Sketch and the Adobe Creative suite through to UI/UX.</p>
    <p>Looking to refocus and text the next step in my career to provide value throughout a product lifecycle.</p>
    </div>
  </div>
  </div>
);

export default TitleBar;
