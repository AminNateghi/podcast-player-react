import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import IconCategory from './icons/Category'
import IconDashboard from './icons/Dashboard'
import IconSearch from './icons/Search';
import styles from './SidebarItems.module.scss';

export default class SidebarItems extends Component {
  render() {
    return (
      <ul className={ styles.sidebarContainer }>
        <li>
          <NavLink to={ "best-podcast" } className={ ({ isActive }) =>
            isActive
              ? styles.active
              : styles.normal
          }>
            <IconDashboard />
            <span>Best Podcasts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ "search" } className={ ({ isActive }) =>
            isActive
              ? styles.active
              : styles.normal
          }>
            <IconSearch />
            <span>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={ "category" } className={ ({ isActive }) =>
            isActive
              ? styles.active
              : styles.normal
          }>
            <IconCategory />
            <span>Categories</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}
