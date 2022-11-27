import React, { useEffect } from 'react'
import styles from './Sidebar.module.scss';
import AppLogo from './AppLogo'
import { RadioPlayer } from './RadioPlayer'
import { SidebarItems } from './SidebarItems'

export const Sidebar = (props) => {

  useEffect(() => {
    console.log(props);
  }, [props])

  return (
    <>
      <aside className={ styles.sidebarContainer }>
        <AppLogo />
        <SidebarItems />
        <RadioPlayer currentRadio={ props } title="Radio Title" desc="Radio Description" />
      </aside>
    </>
  )
}
