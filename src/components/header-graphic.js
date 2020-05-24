import React from "react"
function HeaderGraphic(props) {
  return (
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
      <div id="animation8" class="w-2/5 dan-orange flex-square"></div>
    </div>
    </div>
    </div>
  )
}
export default HeaderGraphic
