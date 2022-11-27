import React from 'react'
import { NavLink } from 'react-router-dom'
import IconCategory from './icons/Category'
import IconDashboard from './icons/Dashboard'
import IconSearch from './icons/Search';
import styles from './SidebarItems.module.scss';

export const SidebarItems = () => {
  const menus = [
    {
      title: 'Best Podcasts',
      icon: <IconDashboard />,
      link: 'best-podcast'
    },
    {
      title: 'Search',
      icon: <IconSearch />,
      link: 'search'
    },
    {
      title: 'Categories',
      icon: <IconCategory />,
      link: 'category'
    },
  ];

  return (
    <ul className={ styles.sidebarContainer }>
      { menus.map(item => {
        return (
          <li>
            <NavLink to={ item.link } className={ ({ isActive }) =>
              isActive
                ? styles.active
                : styles.normal
            }>
              { item.icon }
              <span>{ item.title }</span>
            </NavLink>
          </li>
        )
      }) }
    </ul>
  )
}
