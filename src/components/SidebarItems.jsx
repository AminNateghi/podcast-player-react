import React, { Component } from 'react'
import IconCategory from './icons/Category'
import IconDashboard from './icons/Dashboard'

export default class SidebarItems extends Component {
  render() {
    return (
      <ul className="space-y-2 tracking-wide mt-8">
        <li>
          <a href="/" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
            <IconDashboard />
            <span className="-mr-1 font-medium">All Countries</span>
          </a>
        </li>
        <li>
          <a href="/" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
           <IconCategory />
            <span className="group-hover:text-gray-700">Categories</span>
          </a>
        </li>
      </ul>
    )
  }
}
