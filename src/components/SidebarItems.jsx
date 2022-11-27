import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import IconCategory from './icons/Category'
import IconDashboard from './icons/Dashboard'

export default class SidebarItems extends Component {
  render() {
    return (
      <ul className="space-y-2 tracking-wide mt-8">
        <li>
          <NavLink to={ "best-podcast" } aria-label="dashboard" className={ ({ isActive, IsPending }) =>
            isActive
              ? "px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          }>
            <IconDashboard />
            <span className="-mr-1 font-medium">Best Podcasts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ "category" } className={ ({ isActive, IsPending }) =>
            isActive
            ? "px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
          }>
            <IconCategory />
            <span className="group-hover:text-gray-700">Categories</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}
