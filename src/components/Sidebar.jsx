import React from 'react'
import styles from './Sidebar.module.scss';
import { RadioPlayer } from './RadioPlayer'
import { SidebarItems } from './SidebarItems'

export const Sidebar = (props) => {
  return (
    <>
      <aside className={ styles.sidebarContainer }>
        <SidebarItems />
        <RadioPlayer currentRadio={ props } title="Radio Title" desc="Radio Description" />
      </aside>
    </>
  )
}
