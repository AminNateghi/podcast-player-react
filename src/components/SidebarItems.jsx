import React from 'react'
import { NavLink } from 'react-router-dom'
import IconSearch from '../assets/images/magnifying-glass-svgrepo-com.svg';
import IconStar from '../assets/images/star-svgrepo-com.svg';
import IconCategory from '../assets/images/folder-svgrepo-com.svg';
import styles from './SidebarItems.module.scss';

export const SidebarItems = () => {
  const menus = [
    {
      title: 'Best Podcasts',
      icon: IconStar,
      link: 'best-podcast'
    },
    {
      title: 'Search',
      icon: IconSearch,
      link: 'search'
    },
    {
      title: 'Categories',
      icon: IconCategory,
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
              <img alt="" src={item.icon} />
              <span>{ item.title }</span>
            </NavLink>
          </li>
        )
      }) }
    </ul>
  )
}
