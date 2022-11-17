import React, { Component } from 'react'

export default class IconDefaultCover extends Component {
  render() {
    const fill1 = { fill: "#FFD05B" };
    const fill2 = { fill: "#324A5E" };
    const fill3 = { fill: "#2C9984" };
    const fill4 = { fill: "#ACB3BA" };
    const fill5 = { fill: "#2B3B4E" };
    const fill6 = { fill: "#FFFFFF" };

    return (
      <svg className="w-40 h-40" viewBox="0 0 40 40" fill="currentColor">
        <circle className={fill1} cx="252.5" cy="252.5" r="252.5" />
        <path className={fill2} d="M357.9,120.2c-1.5-3.7-5.6-5.5-9.3-4.1l-244,95.6c-3.7,1.5-5.5,5.6-4.1,9.3c1.1,2.8,3.8,4.6,6.7,4.6
	c0.9,0,1.8-0.2,2.6-0.5l244-95.6C357.5,128.1,359.4,123.9,357.9,120.2z"/>
        <path className={fill3} d="M383.5,280.1h31c0.9,0,1.7-0.8,1.7-1.7v-51.2c0-0.9-0.8-1.7-1.7-1.7h-31V280.1z" />
        <path className={fill6} d="M392.7,389.4H92.9c-2.3,0-4.1-1.9-4.1-4.1V207.5c0-2.3,1.9-4.1,4.1-4.1h299.8c2.3,0,4.1,1.9,4.1,4.1
	v177.8C396.9,387.6,395,389.4,392.7,389.4z"/>
        <g>
          <rect x="113.2" y="232.6" className={fill4} width="120" height="13.8" />
          <rect x="113.2" y="261"   className={fill4} width="120" height="13.8" />
          <rect x="113.2" y="289.5" className={fill4} width="120" height="13.8" />
          <rect x="113.2" y="317.9" className={fill4} width="120" height="13.8" />
          <rect x="113.2" y="346.4" className={fill4} width="120" height="13.8" />
        </g>
        <circle className={fill2} cx="314.5" cy="296.4" r="54.3" />
        <circle className={fill5} cx="314.5" cy="296.4" r="36.7" />
      </svg>
    )
  }
}
