import React from "react";

export default(props)=>{
    console.log(props)
    return(
        <svg className="intro" viewBox="0 0 200 86">
  <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Hi, i`m Sergio,</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">junior frontend developer,</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">based in Berlin.</text>


  <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Hi, i`m Sergio,</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">junior frontend developer,</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">based in Berlin.</text>

  <defs>
    <clipPath id="text1">
      <text textAnchor="start" x="10" y="30" class="text">Hi, i`m Sergio,</text>
    </clipPath>
    <clipPath id="text2">
      <text textAnchor="start" x="10" y="50" class="text">junior frontend developer,</text>
    </clipPath>
    <clipPath id="text3">
      <text textAnchor="start" x="10" y="70" class="text">based in Berlin.</text>
    </clipPath>
   
  </defs>
</svg>
    )
}


